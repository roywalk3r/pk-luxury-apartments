import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const databaseUrl = process.env.DATABASE_URL ?? "mysql://avnadmin:CHANGE_ME_PASSWORD@mysql-CHANGE_ME_HOST.b.aivencloud.com:17636/defaultdb";

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  adapter: new PrismaMariaDb(databaseUrl),
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
