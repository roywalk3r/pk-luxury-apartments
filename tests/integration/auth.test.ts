import { describe, it, expect, beforeAll, afterAll } from "vitest";
import "dotenv/config";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { auth } from "@/lib/auth";
import { NextRequest } from "next/server";
import proxy from "@/proxy";

let prisma: PrismaClient;

beforeAll(async () => {
  prisma = new PrismaClient({ adapter: new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" }) });
  const hash = await (await import("bcryptjs")).hash("test1234", 12);
  await prisma.user.upsert({
    where: { email: "testadmin@x.local" },
    update: {},
    create: { email: "testadmin@x.local", name: "Test Admin", passwordHash: hash, role: "ADMIN" },
  });
  await prisma.user.upsert({
    where: { email: "testtenant@x.local" },
    update: {},
    create: { email: "testtenant@x.local", name: "Test Tenant", passwordHash: hash, role: "TENANT" },
  });
});

afterAll(async () => {
  await prisma.user.deleteMany({ where: { email: { in: ["testadmin@x.local", "testtenant@x.local"] } } });
  await prisma.$disconnect();
});

function req(path: string, cookies: Record<string, string> = {}): NextRequest {
  const r = new NextRequest(`http://localhost:3000${path}`);
  for (const [k, v] of Object.entries(cookies)) r.cookies.set(k, v);
  return r;
}

describe("proxy role gates", () => {
  it("redirects unauthenticated user from /admin/tenants to /login", async () => {
    const res = await proxy(req("/admin/tenants"));
    expect(res.headers.get("location")).toContain("/login");
  });

  it("redirects unauthenticated user from /dashboard to /login", async () => {
    const res = await proxy(req("/dashboard"));
    expect(res.headers.get("location")).toContain("/login");
  });

  it("redirects tenant away from /admin/*", async () => {
    // Simulate by creating a JWT and passing as cookie
    const { encode } = await import("next-auth/jwt");
    const jwt = await encode({ token: { id: "x", role: "TENANT" }, secret: process.env.AUTH_SECRET!, salt: "authjs.session-token" });
    const res = await proxy(req("/admin/tenants", { "authjs.session-token": jwt! }));
    expect(res.headers.get("location")).toContain("/dashboard");
  });

  it("passes admin through /admin/tenants", async () => {
    const { encode } = await import("next-auth/jwt");
    const jwt = await encode({ token: { id: "x", role: "ADMIN" }, secret: process.env.AUTH_SECRET!, salt: "authjs.session-token" });
    const res = await proxy(req("/admin/tenants", { "authjs.session-token": jwt! }));
    expect(res.headers.get("location")).toBeNull();
  });
});
