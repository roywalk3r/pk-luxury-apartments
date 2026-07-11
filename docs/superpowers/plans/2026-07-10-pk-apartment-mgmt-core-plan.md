# PK Luxury Apartments — Core Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up a runnable Next.js 16 + Prisma + SQLite + Auth.js v5 app with full schema, role-based proxy, public landing/room list, admin CRUD for rooms and tenants, tenant profile, and seed data — per `docs/superpowers/specs/2026-07-10-pk-apartment-mgmt-core-design.md`.

**Architecture:** Single Next.js 16 app, App Router, server-first. Auth.js v5 with Credentials provider + JWT session + `role` claim. `proxy.ts` (Next.js 16's renamed middleware) gates routes by role. Prisma manages SQLite at `prisma/dev.db`. All forms use Server Actions + Zod + `useActionState`. shadcn/ui primitives for all UI components.

**Tech Stack:** Next.js 16.2.10, React 19.2.4, Prisma 5/6 + SQLite, Auth.js v5 (next-auth@5), bcryptjs, Zod, Tailwind v4, shadcn/ui (style: base-nova), Vitest.

## Global Constraints

- Next.js 16 — `middleware.ts` is renamed to `proxy.ts`. Read `node_modules/next/dist/docs/01-app/` before writing App Router code.
- TypeScript strict mode.
- Server Actions with `'use server'` directive for all mutations. Each action validates with Zod and returns `{ errors?, message? }` shape.
- `proxy.ts` runs at the project root, NOT in `src/`.
- Prisma client output: `lib/generated/prisma` (already set in `prisma.config.ts`).
- Money values stored as integer pesewas (1 GHS = 100 pesewas).
- Single commit per task with conventional commit message.
- Branch: `feat/pk-apartment-core` (already created).
- Don't install packages not listed in this plan. If you think one is needed, flag it and stop.
- Run `npx prisma generate` after every schema change before running code that imports from `@/lib/generated/prisma`.

---

## File Structure

```
prisma/
  schema.prisma         # 9 models, SQLite, full schema
  seed.ts               # idem: 1 admin, 2 staff, 8 tenants, 12 rooms, 8 tenancies
lib/
  db.ts                 # Prisma client singleton
  auth.ts               # Auth.js v5 config (Credentials, JWT, role claim)
  validation.ts         # Zod schemas: Login, CreateRoom, CreateTenant, UpdateProfile
  actions/
    auth.ts             # login, logout server actions
    rooms.ts            # createRoom, updateRoom, deleteRoom
    tenants.ts          # createTenant, updateTenant, deactivateTenant
    profile.ts          # updateProfile, changePassword
app/
  layout.tsx            # existing — wrap children with <SessionProvider>
  page.tsx              # replace with landing page
  (public)/
    rooms/page.tsx              # public room list
    book/[roomId]/page.tsx      # stub "coming soon"
  (auth)/
    login/page.tsx              # login form
  (tenant)/
    layout.tsx                  # TENANT-only guard
    dashboard/page.tsx          # placeholder
    profile/page.tsx            # profile form
  (admin)/
    layout.tsx                  # ADMIN+STAFF guard
    admin/dashboard/page.tsx
    admin/rooms/page.tsx
    admin/rooms/new/page.tsx
    admin/rooms/[id]/page.tsx
    admin/tenants/page.tsx
    admin/tenants/new/page.tsx
    admin/tenants/[id]/page.tsx
  api/auth/[...nextauth]/route.ts
components/
  ui/                   # shadcn: button, input, label, form, table, dialog, card, badge, dropdown-menu, sheet, select
  forms/
    login-form.tsx
    room-form.tsx
    tenant-form.tsx
    profile-form.tsx
  nav/
    nav-bar.tsx         # role-aware nav
proxy.ts                # role-based route gates
tests/
  integration/
    auth.test.ts        # role-middleware test
vitest.config.ts
.env                    # DATABASE_URL, AUTH_SECRET
```

---

## Task 1: Switch Prisma to SQLite + install dependencies

**Files:**
- Modify: `prisma/schema.prisma`
- Modify: `package.json` (deps added by `npm install`)
- Create: `.env`

**Step 1: Stop the dev server if running**

```bash
pkill -f "next dev" || true
```

**Step 2: Install dependencies**

```bash
cd /home/rseann/projects/Nextjs/renter
npm install next-auth@beta @auth/prisma-adapter bcryptjs zod
npm install -D @types/bcryptjs vitest @vitest/ui
```

**Step 3: Write the full Prisma schema**

Replace `prisma/schema.prisma` with:

```prisma
generator client {
  provider = "prisma-client"
  output   = "../lib/generated/prisma"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

enum Role { ADMIN STAFF TENANT PROSPECT }
enum RoomStatus { AVAILABLE OCCUPIED MAINTENANCE }
enum PaymentMethod { MOMO VISA CASH OTHER }
enum PaymentStatus { PENDING CONFIRMED FAILED }
enum UtilityType { WATER }
enum BillStatus { UNPAID PAID OVERDUE }
enum RequestStatus { OPEN ASSIGNED IN_PROGRESS RESOLVED CLOSED }
enum Priority { LOW MEDIUM HIGH URGENT }
enum NotificationChannel { SMS EMAIL IN_APP }
enum NotificationStatus { QUEUED SENT FAILED }

model User {
  id              String   @id @default(cuid())
  email           String   @unique
  passwordHash    String
  name            String
  phone           String?
  role            Role     @default(PROSPECT)
  profileImageUrl String?
  active          Boolean  @default(true)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  tenancies          Tenancy[]            @relation("TenantTenancies")
  assignedRequests   MaintenanceRequest[] @relation("AssignedStaff")
  raisedRequests     MaintenanceRequest[] @relation("Requester")
  notifications      Notification[]
  auditLogs          AuditLog[]
}

model Room {
  id           String     @id @default(cuid())
  number       String     @unique
  type         String
  size         String
  monthlyRent  Int
  status       RoomStatus @default(AVAILABLE)
  description  String?
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt

  tenancies Tenancy[]
  requests  MaintenanceRequest[]
}

model Tenancy {
  id          String    @id @default(cuid())
  tenantId    String
  roomId      String
  startDate   DateTime
  endDate     DateTime?
  monthlyRent Int
  createdAt   DateTime  @default(now())

  tenant    User         @relation("TenantTenancies", fields: [tenantId], references: [id])
  room      Room         @relation(fields: [roomId], references: [id])
  payments  RentPayment[]
  utilities UtilityBill[]

  @@index([tenantId])
  @@index([roomId])
}

model RentPayment {
  id         String        @id @default(cuid())
  tenancyId  String
  amount     Int
  method     PaymentMethod
  status     PaymentStatus @default(PENDING)
  paidAt     DateTime?
  reference  String?
  receiptUrl String?
  createdAt  DateTime      @default(now())

  tenancy Tenancy @relation(fields: [tenancyId], references: [id])

  @@index([tenancyId])
  @@index([status])
}

model UtilityBill {
  id         String      @id @default(cuid())
  tenancyId  String
  type       UtilityType @default(WATER)
  amount     Int
  dueDate    DateTime
  status     BillStatus  @default(UNPAID)
  paidAt     DateTime?
  receiptUrl String?
  createdAt  DateTime    @default(now())

  tenancy Tenancy @relation(fields: [tenancyId], references: [id])

  @@index([tenancyId])
  @@index([status])
}

model MaintenanceRequest {
  id           String        @id @default(cuid())
  tenantId     String
  roomId       String
  category     String
  title        String
  description  String
  status       RequestStatus @default(OPEN)
  priority     Priority      @default(MEDIUM)
  assignedToId String?
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt
  resolvedAt   DateTime?

  tenant     User  @relation("Requester", fields: [tenantId], references: [id])
  room       Room  @relation(fields: [roomId], references: [id])
  assignedTo User? @relation("AssignedStaff", fields: [assignedToId], references: [id])

  @@index([tenantId])
  @@index([status])
}

model Notification {
  id        String              @id @default(cuid())
  userId    String
  channel   NotificationChannel
  subject   String
  body      String
  status    NotificationStatus  @default(QUEUED)
  sentAt    DateTime?
  createdAt DateTime            @default(now())

  user User @relation(fields: [userId], references: [id])

  @@index([userId])
}

model AuditLog {
  id         String   @id @default(cuid())
  userId     String?
  action     String
  entityType String
  entityId   String?
  payload    String?
  createdAt  DateTime @default(now())

  user User? @relation(fields: [userId], references: [id])

  @@index([entityType, entityId])
}
```

**Note:** SQLite doesn't support native enums; Prisma represents them as strings under the hood. The `enum` declarations above are still valid Prisma syntax and Prisma will generate TypeScript string-union types. (If Prisma rejects enums for SQLite, fall back to String fields with constants in `lib/constants.ts` — but the current Prisma version supports enum mapping to TEXT for SQLite via its check constraints.)

**Step 4: Create `.env`**

```bash
cat > .env <<'EOF'
DATABASE_URL="file:./dev.db"
AUTH_SECRET="dev-secret-change-me-in-production-please-this-is-32-chars-min"
AUTH_TRUST_HOST=true
NEXTAUTH_URL=http://localhost:3000
EOF
```

**Step 5: Generate Prisma client and run initial migration**

```bash
npx prisma migrate dev --name init
```

Expected: Creates `prisma/dev.db`, `prisma/migrations/0001_init/`, generates client into `lib/generated/prisma/`.

**Step 6: Verify the generated client exists**

```bash
ls lib/generated/prisma/ | head -10
```

Expected: `index.d.ts`, `index.js`, `client.d.ts`, etc.

**Step 7: Commit**

```bash
git add prisma/schema.prisma prisma/migrations/ lib/generated/ .env package.json package-lock.json
git commit -m "feat(db): switch to SQLite, full schema with 9 models"
```

---

## Task 2: Prisma client singleton + base utilities

**Files:**
- Create: `lib/db.ts`
- Modify: `.gitignore` (ensure `lib/generated/` is NOT ignored)

**Step 1: Check `.gitignore`**

```bash
grep -E "lib/generated|prisma/dev" .gitignore || echo "ok"
```

If `lib/generated` is in `.gitignore`, remove that line. (Generated client should be tracked so the app builds without running `prisma generate` first.)

**Step 2: Create `lib/db.ts`**

```typescript
import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

**Note:** Prisma 7 requires a Driver Adapter — `new PrismaClient()` with no options no longer compiles. The `prisma-client` generator (the new Prisma 7 default) only accepts `{ adapter }` or `{ accelerateUrl }` in its options. The previous `datasourceUrl` / `datasources` shape is gone. Run `npm install @prisma/adapter-better-sqlite3` first.

**Step 3: Commit**

```bash
git add lib/db.ts .gitignore
git commit -m "feat(db): Prisma client singleton"
```

---

## Task 3: Validation schemas (Zod)

**Files:**
- Create: `lib/validation.ts`

**Step 1: Write `lib/validation.ts`**

```typescript
import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export const CreateRoomSchema = z.object({
  number: z.string().min(1, "Room number is required"),
  type: z.string().min(1, "Type is required"),
  size: z.string().min(1, "Size is required"),
  monthlyRent: z.coerce.number().int().positive("Rent must be positive (in pesewas)"),
  description: z.string().optional().default(""),
});

export const UpdateRoomSchema = CreateRoomSchema.extend({
  status: z.enum(["AVAILABLE", "OCCUPIED", "MAINTENANCE"]),
});

export const CreateTenantSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional().default(""),
  password: z.string().min(6, "Password must be at least 6 characters"),
  roomId: z.string().min(1, "Room is required"),
  monthlyRent: z.coerce.number().int().positive("Rent must be positive (in pesewas)"),
});

export const UpdateTenantSchema = z.object({
  name: z.string().min(2),
  phone: z.string().optional().default(""),
  active: z.coerce.boolean(),
});

export const UpdateProfileSchema = z.object({
  name: z.string().min(2),
  phone: z.string().optional().default(""),
  profileImageUrl: z.string().url().optional().or(z.literal("")),
});

export const ChangePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm your new password"),
  })
  .refine((d) => d.newPassword === d.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ActionState = {
  errors?: Record<string, string[]>;
  message?: string;
} | undefined;

export type ServerAction = (state: ActionState, formData: FormData) => Promise<ActionState>;
```

**Step 2: Commit**

```bash
git add lib/validation.ts
git commit -m "feat(validation): Zod schemas for auth, rooms, tenants, profile"
```

---

## Task 4: Auth.js v5 config

**Files:**
- Create: `lib/auth.ts`
- Create: `app/api/auth/[...nextauth]/route.ts`

**Step 1: Write `lib/auth.ts`**

```typescript
import NextAuth, { type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { LoginSchema } from "@/lib/validation";

export type AppRole = "ADMIN" | "STAFF" | "TENANT" | "PROSPECT";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: AppRole;
    } & DefaultSession["user"];
  }
  interface User {
    role: AppRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: AppRole;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsed = LoginSchema.safeParse(credentials);
        if (!parsed.success) return null;
        const { email, password } = parsed.data;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.active) return null;
        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return null;
        return { id: user.id, email: user.email, name: user.name, role: user.role };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },
});
```

**Step 2: Write the route handler `app/api/auth/[...nextauth]/route.ts`**

```typescript
import { handlers } from "@/lib/auth";

export const { GET, POST } = handlers;
```

**Step 3: Verify the build picks up the new files**

```bash
npx tsc --noEmit 2>&1 | head -30
```

Expected: zero errors.

**Step 4: Commit**

```bash
git add lib/auth.ts app/api/auth/
git commit -m "feat(auth): Auth.js v5 config with Credentials + JWT role claim"
```

---

## Task 5: proxy.ts — role-based route gates

**Files:**
- Create: `proxy.ts` (project root, NOT inside `app/`)

**Step 1: Write `proxy.ts`**

```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const TENANT_PREFIXES = ["/dashboard", "/profile"];
const ADMIN_PREFIXES = ["/admin"];

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  const isTenantRoute = TENANT_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  const isAdminRoute = ADMIN_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  if (!token && (isTenantRoute || isAdminRoute)) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  if (token && isAdminRoute && token.role !== "ADMIN" && token.role !== "STAFF") {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  if (token && isTenantRoute && token.role !== "TENANT") {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
```

**Step 2: Commit**

```bash
git add proxy.ts
git commit -m "feat(auth): proxy.ts role-based route gates"
```

---

## Task 6: Session provider in root layout

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Add a client-side SessionProvider**

Auth.js v5 has `SessionProvider` from `next-auth/react`. We need a small client wrapper because the root layout is a server component.

Create `components/providers/session-provider.tsx`:

```typescript
"use client";
import { SessionProvider } from "next-auth/react";

export function AuthSessionProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
```

**Step 2: Wrap root layout children**

Replace `app/layout.tsx` contents with:

```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthSessionProvider } from "@/components/providers/session-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PK Luxury Apartments",
  description: "Apartment management system",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </body>
    </html>
  );
}
```

**Step 3: Commit**

```bash
git add app/layout.tsx components/providers/session-provider.tsx
git commit -m "feat(auth): SessionProvider in root layout"
```

---

## Task 7: Login server action + login page

**Files:**
- Create: `lib/actions/auth.ts`
- Create: `app/(auth)/login/page.tsx`
- Create: `components/forms/login-form.tsx`

**Step 1: Write the login server action `lib/actions/auth.ts`**

```typescript
"use server";
import { signIn, signOut } from "@/lib/auth";
import { LoginSchema, type ActionState } from "@/lib/validation";
import { AuthError } from "next-auth";

export async function loginAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }
  try {
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirectTo: "/",
    });
  } catch (e) {
    if (e instanceof AuthError) {
      return { message: "Invalid email or password" };
    }
    throw e;
  }
  return undefined;
}

export async function logoutAction() {
  await signOut({ redirectTo: "/login" });
}
```

**Step 2: Write `components/forms/login-form.tsx`**

```typescript
"use client";
import { useActionState } from "react";
import { loginAction } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, undefined);
  return (
    <form action={formAction} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
        {state?.errors?.email?.[0] && <p className="text-sm text-red-600 mt-1">{state.errors.email[0]}</p>}
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" required autoComplete="current-password" />
        {state?.errors?.password?.[0] && <p className="text-sm text-red-600 mt-1">{state.errors.password[0]}</p>}
      </div>
      {state?.message && <p className="text-sm text-red-600">{state.message}</p>}
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
```

**Step 3: Write `app/(auth)/login/page.tsx`**

```typescript
import { LoginForm } from "@/components/forms/login-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="flex flex-1 items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}
```

**Step 4: Add shadcn primitives used so far**

```bash
npx shadcn@latest add button input label card --yes
```

Expected: 4 new files in `components/ui/`.

**Step 5: Commit**

```bash
git add lib/actions/auth.ts components/forms/login-form.tsx app/\(auth\)/login/page.tsx components/ui/ components.json
git commit -m "feat(auth): login action, form, and page"
```

---

## Task 8: Landing page + public room list

**Files:**
- Modify: `app/page.tsx`
- Create: `app/(public)/rooms/page.tsx`
- Create: `app/(public)/book/[roomId]/page.tsx` (stub)

**Step 1: Replace `app/page.tsx`**

```typescript
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";

export default async function HomePage() {
  const availableCount = await prisma.room.count({ where: { status: "AVAILABLE" } });
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight">PK Luxury Apartments</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        Modern living in Haatso, Ghana. Browse available rooms and book online.
      </p>
      <div className="mt-6 flex gap-3">
        <Button asChild>
          <Link href="/rooms">Browse rooms ({availableCount} available)</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/login">Sign in</Link>
        </Button>
      </div>
    </main>
  );
}
```

**Step 2: Write `app/(public)/rooms/page.tsx`**

```typescript
import Link from "next/link";
import { prisma } from "@/lib/db";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function RoomsPage() {
  const rooms = await prisma.room.findMany({
    where: { status: "AVAILABLE" },
    orderBy: { monthlyRent: "asc" },
  });
  return (
    <main className="flex flex-1 flex-col p-6 max-w-5xl mx-auto w-full">
      <h1 className="text-3xl font-bold mb-6">Available Rooms</h1>
      {rooms.length === 0 && <p className="text-muted-foreground">No rooms available right now.</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <Card key={room.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle>Room {room.number}</CardTitle>
                <Badge>{room.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{room.size}</p>
              <p className="mt-2 text-lg font-semibold">
                GHS {(room.monthlyRent / 100).toFixed(2)}/mo
              </p>
              {room.description && <p className="mt-2 text-sm">{room.description}</p>}
              <Link
                href={`/book/${room.id}`}
                className="mt-3 inline-block text-sm font-medium underline"
              >
                Request booking →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
```

**Step 3: Write the booking stub `app/(public)/book/[roomId]/page.tsx`**

```typescript
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function BookStub({ params }: { params: Promise<{ roomId: string }> }) {
  const { roomId } = await params;
  const room = await prisma.room.findUnique({ where: { id: roomId } });
  if (!room) notFound();
  return (
    <main className="flex flex-1 items-center justify-center p-6">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Book Room {room.number}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Online booking is coming in a future update. Please contact the manager to reserve this room.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
```

**Step 4: Add `badge` shadcn primitive**

```bash
npx shadcn@latest add badge --yes
```

**Step 5: Commit**

```bash
git add app/page.tsx 'app/(public)/' components/ui/badge.tsx
git commit -m "feat(public): landing page, room list, booking stub"
```

---

## Task 9: Admin layout + dashboard

**Files:**
- Create: `app/(admin)/admin/layout.tsx`
- Create: `app/(admin)/admin/dashboard/page.tsx`
- Create: `components/nav/nav-bar.tsx`

**Step 1: Write the nav bar `components/nav/nav-bar.tsx`**

```typescript
"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function NavBar() {
  const { data: session, status } = useSession();
  if (status === "loading") return null;
  const role = session?.user?.role;
  return (
    <header className="border-b">
      <nav className="flex items-center gap-4 p-4 max-w-6xl mx-auto">
        <Link href="/" className="font-bold">PK Apartments</Link>
        <div className="flex items-center gap-3 ml-auto text-sm">
          {(role === "ADMIN" || role === "STAFF") && (
            <>
              <Link href="/admin/dashboard">Admin</Link>
              <Link href="/admin/rooms">Rooms</Link>
              <Link href="/admin/tenants">Tenants</Link>
            </>
          )}
          {role === "TENANT" && <Link href="/dashboard">Dashboard</Link>}
          {!session ? (
            <Button asChild size="sm" variant="outline">
              <Link href="/login">Sign in</Link>
            </Button>
          ) : (
            <>
              <Link href="/profile" className="text-muted-foreground">{session.user?.name}</Link>
              <Button size="sm" variant="ghost" onClick={() => signOut({ callbackUrl: "/login" })}>
                Sign out
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
```

**Step 2: Write `app/(admin)/admin/layout.tsx`**

```typescript
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { NavBar } from "@/components/nav/nav-bar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session || (session.user.role !== "ADMIN" && session.user.role !== "STAFF")) {
    redirect("/login");
  }
  return (
    <>
      <NavBar />
      <div className="flex-1 p-6 max-w-6xl mx-auto w-full">{children}</div>
    </>
  );
}
```

**Step 3: Write `app/(admin)/admin/dashboard/page.tsx`**

```typescript
import { prisma } from "@/lib/db";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function AdminDashboardPage() {
  const [roomCount, tenantCount, staffCount, occupiedCount] = await Promise.all([
    prisma.room.count(),
    prisma.user.count({ where: { role: "TENANT", active: true } }),
    prisma.user.count({ where: { role: { in: ["ADMIN", "STAFF"] } } }),
    prisma.room.count({ where: { status: "OCCUPIED" } }),
  ]);
  const stats = [
    { label: "Rooms", value: roomCount },
    { label: "Occupied", value: occupiedCount },
    { label: "Active tenants", value: tenantCount },
    { label: "Staff + Admin", value: staffCount },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">{s.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
```

**Step 4: Commit**

```bash
git add 'app/(admin)/' components/nav/nav-bar.tsx
git commit -m "feat(admin): admin layout, dashboard, nav bar"
```

---

## Task 10: Admin rooms CRUD (list, create, edit, soft-archive)

**Files:**
- Create: `lib/actions/rooms.ts`
- Create: `app/(admin)/admin/rooms/page.tsx`
- Create: `app/(admin)/admin/rooms/new/page.tsx`
- Create: `app/(admin)/admin/rooms/[id]/page.tsx`
- Create: `components/forms/room-form.tsx`
- Add shadcn: `table select textarea`

**Step 1: Add shadcn primitives**

```bash
npx shadcn@latest add table select textarea --yes
```

**Step 2: Write `lib/actions/rooms.ts`**

```typescript
"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { CreateRoomSchema, UpdateRoomSchema, type ActionState } from "@/lib/validation";

async function requireAdmin() {
  const session = await auth();
  if (!session || (session.user.role !== "ADMIN" && session.user.role !== "STAFF")) {
    throw new Error("Unauthorized");
  }
  return session;
}

export async function createRoomAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const session = await requireAdmin();
  const parsed = CreateRoomSchema.safeParse({
    number: formData.get("number"),
    type: formData.get("type"),
    size: formData.get("size"),
    monthlyRent: formData.get("monthlyRent"),
    description: formData.get("description") ?? "",
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };
  const room = await prisma.room.create({ data: parsed.data });
  await prisma.auditLog.create({
    data: { userId: session.user.id, action: "room.create", entityType: "Room", entityId: room.id },
  });
  revalidatePath("/admin/rooms");
  redirect("/admin/rooms");
}

export async function updateRoomAction(
  id: string,
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireAdmin();
  const parsed = UpdateRoomSchema.safeParse({
    number: formData.get("number"),
    type: formData.get("type"),
    size: formData.get("size"),
    monthlyRent: formData.get("monthlyRent"),
    description: formData.get("description") ?? "",
    status: formData.get("status"),
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };
  await prisma.room.update({ where: { id }, data: parsed.data });
  await prisma.auditLog.create({
    data: { userId: session.user.id, action: "room.update", entityType: "Room", entityId: id },
  });
  revalidatePath("/admin/rooms");
  revalidatePath(`/admin/rooms/${id}`);
  redirect("/admin/rooms");
}

export async function archiveRoomAction(id: string) {
  const session = await requireAdmin();
  await prisma.room.update({ where: { id }, data: { status: "MAINTENANCE" } });
  await prisma.auditLog.create({
    data: { userId: session.user.id, action: "room.archive", entityType: "Room", entityId: id },
  });
  revalidatePath("/admin/rooms");
}
```

**Step 3: Write `components/forms/room-form.tsx`**

```typescript
"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

type Props = {
  action: ServerAction;
  defaults?: {
    number?: string;
    type?: string;
    size?: string;
    monthlyRent?: number;
    description?: string;
    status?: "AVAILABLE" | "OCCUPIED" | "MAINTENANCE";
  };
  submitLabel?: string;
};

export function RoomForm({ action, defaults, submitLabel = "Save" }: Props) {
  const [state, formAction, pending] = useActionState(action, undefined);
  return (
    <form action={formAction} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="number">Room number</Label>
        <Input id="number" name="number" required defaultValue={defaults?.number} />
        {state?.errors?.number?.[0] && <p className="text-sm text-red-600">{state.errors.number[0]}</p>}
      </div>
      <div>
        <Label htmlFor="type">Type</Label>
        <Input id="type" name="type" required defaultValue={defaults?.type} placeholder="1BR / 2BR / Studio" />
        {state?.errors?.type?.[0] && <p className="text-sm text-red-600">{state.errors.type[0]}</p>}
      </div>
      <div>
        <Label htmlFor="size">Size</Label>
        <Input id="size" name="size" required defaultValue={defaults?.size} placeholder="e.g. 45 sqm" />
        {state?.errors?.size?.[0] && <p className="text-sm text-red-600">{state.errors.size[0]}</p>}
      </div>
      <div>
        <Label htmlFor="monthlyRent">Monthly rent (pesewas)</Label>
        <Input
          id="monthlyRent" name="monthlyRent" type="number" min="1" required
          defaultValue={defaults?.monthlyRent}
        />
        {state?.errors?.monthlyRent?.[0] && (
          <p className="text-sm text-red-600">{state.errors.monthlyRent[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" defaultValue={defaults?.description} />
      </div>
      {defaults?.status !== undefined && (
        <div>
          <Label htmlFor="status">Status</Label>
          <input type="hidden" name="status" defaultValue={defaults.status} />
          <p className="text-sm text-muted-foreground mt-1">{defaults.status}</p>
        </div>
      )}
      <Button type="submit" disabled={pending}>{pending ? "Saving..." : submitLabel}</Button>
    </form>
  );
}
```

**Step 4: Write `app/(admin)/admin/rooms/page.tsx`**

```typescript
import Link from "next/link";
import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default async function RoomsListPage() {
  const rooms = await prisma.room.findMany({ orderBy: { number: "asc" } });
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Rooms</h1>
        <Button asChild><Link href="/admin/rooms/new">Add room</Link></Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Number</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Rent (GHS)</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms.map((r) => (
            <TableRow key={r.id}>
              <TableCell className="font-medium">{r.number}</TableCell>
              <TableCell>{r.type}</TableCell>
              <TableCell>{r.size}</TableCell>
              <TableCell>{(r.monthlyRent / 100).toFixed(2)}</TableCell>
              <TableCell><Badge>{r.status}</Badge></TableCell>
              <TableCell><Link href={`/admin/rooms/${r.id}`} className="underline">Edit</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
```

**Step 5: Write `app/(admin)/admin/rooms/new/page.tsx`**

```typescript
import { createRoomAction } from "@/lib/actions/rooms";
import { RoomForm } from "@/components/forms/room-form";

export default function NewRoomPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">New room</h1>
      <RoomForm action={createRoomAction} submitLabel="Create room" />
    </div>
  );
}
```

**Step 6: Write `app/(admin)/admin/rooms/[id]/page.tsx`**

```typescript
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { RoomForm } from "@/components/forms/room-form";
import { updateRoomAction } from "@/lib/actions/rooms";
import { archiveRoomAction } from "@/lib/actions/rooms";
import { Button } from "@/components/ui/button";

export default async function EditRoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const room = await prisma.room.findUnique({ where: { id } });
  if (!room) notFound();
  const action = updateRoomAction.bind(null, id);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit room {room.number}</h1>
      <RoomForm
        action={action}
        defaults={{
          number: room.number, type: room.type, size: room.size,
          monthlyRent: room.monthlyRent, description: room.description ?? "", status: room.status,
        }}
      />
      <form action={archiveRoomAction.bind(null, id)} className="mt-6">
        <Button type="submit" variant="outline">Archive (set MAINTENANCE)</Button>
      </form>
    </div>
  );
}
```

**Step 7: Commit**

```bash
git add lib/actions/rooms.ts 'app/(admin)/admin/rooms/' components/forms/room-form.tsx components/ui/
git commit -m "feat(admin): rooms CRUD with server actions"
```

---

## Task 11: Admin tenants CRUD

**Files:**
- Create: `lib/actions/tenants.ts`
- Create: `app/(admin)/admin/tenants/page.tsx`
- Create: `app/(admin)/admin/tenants/new/page.tsx`
- Create: `app/(admin)/admin/tenants/[id]/page.tsx`
- Create: `components/forms/tenant-form.tsx`
- Add shadcn: `dropdown-menu` (for deactivate menu)

**Step 1: Add dropdown-menu primitive**

```bash
npx shadcn@latest add dropdown-menu --yes
```

**Step 2: Write `lib/actions/tenants.ts`**

```typescript
"use server";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import {
  CreateTenantSchema, UpdateTenantSchema, type ActionState,
} from "@/lib/validation";

async function requireAdmin() {
  const session = await auth();
  if (!session || (session.user.role !== "ADMIN" && session.user.role !== "STAFF")) {
    throw new Error("Unauthorized");
  }
  return session;
}

export async function createTenantAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const session = await requireAdmin();
  const parsed = CreateTenantSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? "",
    password: formData.get("password"),
    roomId: formData.get("roomId"),
    monthlyRent: formData.get("monthlyRent"),
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };

  const existing = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (existing) {
    return { errors: { email: ["A user with this email already exists"] } };
  }

  const room = await prisma.room.findUnique({ where: { id: parsed.data.roomId } });
  if (!room || room.status !== "AVAILABLE") {
    return { errors: { roomId: ["Room is not available"] } };
  }

  const passwordHash = await bcrypt.hash(parsed.data.password, 12);
  const user = await prisma.user.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      passwordHash,
      role: "TENANT",
    },
  });
  await prisma.tenancy.create({
    data: {
      tenantId: user.id,
      roomId: parsed.data.roomId,
      startDate: new Date(),
      monthlyRent: parsed.data.monthlyRent,
    },
  });
  await prisma.room.update({ where: { id: parsed.data.roomId }, data: { status: "OCCUPIED" } });
  await prisma.auditLog.create({
    data: { userId: session.user.id, action: "tenant.create", entityType: "User", entityId: user.id },
  });
  revalidatePath("/admin/tenants");
  redirect("/admin/tenants");
}

export async function updateTenantAction(
  id: string,
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireAdmin();
  const parsed = UpdateTenantSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone") ?? "",
    active: formData.get("active") === "on",
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };
  await prisma.user.update({
    where: { id },
    data: { name: parsed.data.name, phone: parsed.data.phone || null, active: parsed.data.active },
  });
  await prisma.auditLog.create({
    data: { userId: session.user.id, action: "tenant.update", entityType: "User", entityId: id },
  });
  revalidatePath("/admin/tenants");
  revalidatePath(`/admin/tenants/${id}`);
  redirect("/admin/tenants");
}
```

**Step 3: Write `components/forms/tenant-form.tsx`**

```typescript
"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Room = { id: string; number: string; monthlyRent: number };

type Props =
  | { mode: "create"; action: ServerAction; rooms: Room[]; defaults?: undefined; submitLabel?: string }
  | { mode: "edit"; action: ServerAction; rooms?: undefined; defaults: { name: string; phone: string; active: boolean }; submitLabel?: string };

export function TenantForm(props: Props) {
  const [state, formAction, pending] = useActionState(props.action, undefined);
  return (
    <form action={formAction} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" required defaultValue={props.defaults?.name} />
        {state?.errors?.name?.[0] && <p className="text-sm text-red-600">{state.errors.name[0]}</p>}
      </div>
      {props.mode === "create" ? (
        <>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
            {state?.errors?.email?.[0] && <p className="text-sm text-red-600">{state.errors.email[0]}</p>}
          </div>
          <div>
            <Label htmlFor="password">Initial password</Label>
            <Input id="password" name="password" type="password" required minLength={6} />
            {state?.errors?.password?.[0] && (
              <p className="text-sm text-red-600">{state.errors.password[0]}</p>
            )}
          </div>
        </>
      ) : (
        <input type="hidden" name="email" value="" />
      )}
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" defaultValue={props.defaults?.phone} />
      </div>
      {props.mode === "create" && (
        <>
          <div>
            <Label htmlFor="roomId">Room</Label>
            <input type="hidden" name="roomId" value={props.rooms[0]?.id ?? ""} />
            <Select defaultValue={props.rooms[0]?.id}>
              <SelectTrigger><SelectValue placeholder="Select a room" /></SelectTrigger>
              <SelectContent>
                {props.rooms.map((r) => (
                  <SelectItem key={r.id} value={r.id}>
                    Room {r.number} — GHS {(r.monthlyRent / 100).toFixed(2)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {state?.errors?.roomId?.[0] && <p className="text-sm text-red-600">{state.errors.roomId[0]}</p>}
          </div>
          <div>
            <Label htmlFor="monthlyRent">Monthly rent (pesewas)</Label>
            <Input id="monthlyRent" name="monthlyRent" type="number" min="1" required defaultValue={props.rooms[0]?.monthlyRent} />
            {state?.errors?.monthlyRent?.[0] && (
              <p className="text-sm text-red-600">{state.errors.monthlyRent[0]}</p>
            )}
          </div>
        </>
      )}
      {props.mode === "edit" && (
        <div className="flex items-center gap-2">
          <input id="active" name="active" type="checkbox" defaultChecked={props.defaults.active} />
          <Label htmlFor="active">Account active</Label>
        </div>
      )}
      <Button type="submit" disabled={pending}>
        {pending ? "Saving..." : (props.submitLabel ?? "Save")}
      </Button>
    </form>
  );
}
```

**Step 4: Write `app/(admin)/admin/tenants/page.tsx`**

```typescript
import Link from "next/link";
import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default async function TenantsListPage() {
  const tenants = await prisma.user.findMany({
    where: { role: "TENANT" },
    orderBy: { name: "asc" },
  });
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Tenants</h1>
        <Button asChild><Link href="/admin/tenants/new">Add tenant</Link></Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tenants.map((t) => (
            <TableRow key={t.id}>
              <TableCell className="font-medium">{t.name}</TableCell>
              <TableCell>{t.email}</TableCell>
              <TableCell>{t.phone ?? "—"}</TableCell>
              <TableCell>
                <Badge variant={t.active ? "default" : "secondary"}>
                  {t.active ? "Active" : "Inactive"}
                </Badge>
              </TableCell>
              <TableCell>
                <Link href={`/admin/tenants/${t.id}`} className="underline">Edit</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
```

**Step 5: Write `app/(admin)/admin/tenants/new/page.tsx`**

```typescript
import { prisma } from "@/lib/db";
import { createTenantAction } from "@/lib/actions/tenants";
import { TenantForm } from "@/components/forms/tenant-form";

export default async function NewTenantPage() {
  const rooms = await prisma.room.findMany({
    where: { status: "AVAILABLE" },
    orderBy: { number: "asc" },
  });
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">New tenant</h1>
      {rooms.length === 0 ? (
        <p className="text-muted-foreground">No available rooms. Create or free a room first.</p>
      ) : (
        <TenantForm
          mode="create"
          action={createTenantAction}
          rooms={rooms.map((r) => ({ id: r.id, number: r.number, monthlyRent: r.monthlyRent }))}
          submitLabel="Create tenant"
        />
      )}
    </div>
  );
}
```

**Step 6: Write `app/(admin)/admin/tenants/[id]/page.tsx`**

```typescript
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { updateTenantAction } from "@/lib/actions/tenants";
import { TenantForm } from "@/components/forms/tenant-form";

export default async function EditTenantPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tenant = await prisma.user.findUnique({ where: { id } });
  if (!tenant || tenant.role !== "TENANT") notFound();
  const action = updateTenantAction.bind(null, id);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit tenant</h1>
      <TenantForm
        mode="edit"
        action={action}
        defaults={{ name: tenant.name, phone: tenant.phone ?? "", active: tenant.active }}
        submitLabel="Save changes"
      />
    </div>
  );
}
```

**Step 7: Commit**

```bash
git add lib/actions/tenants.ts 'app/(admin)/admin/tenants/' components/forms/tenant-form.tsx components/ui/
git commit -m "feat(admin): tenants CRUD with room assignment"
```

---

## Task 12: Tenant layout + dashboard + profile

**Files:**
- Create: `app/(tenant)/layout.tsx`
- Create: `app/(tenant)/dashboard/page.tsx`
- Create: `app/(tenant)/profile/page.tsx`
- Create: `lib/actions/profile.ts`
- Create: `components/forms/profile-form.tsx`
- Add shadcn: `dialog` (for change-password modal)

**Step 1: Add shadcn primitive**

```bash
npx shadcn@latest add dialog --yes
```

**Step 2: Write `lib/actions/profile.ts`**

```typescript
"use server";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import {
  UpdateProfileSchema, ChangePasswordSchema, type ActionState,
} from "@/lib/validation";

async function requireTenant() {
  const session = await auth();
  if (!session || session.user.role !== "TENANT") throw new Error("Unauthorized");
  return session;
}

export async function updateProfileAction(
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireTenant();
  const parsed = UpdateProfileSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone") ?? "",
    profileImageUrl: formData.get("profileImageUrl") ?? "",
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };
  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      name: parsed.data.name,
      phone: parsed.data.phone || null,
      profileImageUrl: parsed.data.profileImageUrl || null,
    },
  });
  revalidatePath("/profile");
  return { message: "Profile updated" };
}

export async function changePasswordAction(
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireTenant();
  const parsed = ChangePasswordSchema.safeParse({
    currentPassword: formData.get("currentPassword"),
    newPassword: formData.get("newPassword"),
    confirmPassword: formData.get("confirmPassword"),
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };
  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!user) return { message: "User not found" };
  const ok = await bcrypt.compare(parsed.data.currentPassword, user.passwordHash);
  if (!ok) return { errors: { currentPassword: ["Incorrect current password"] } };
  const passwordHash = await bcrypt.hash(parsed.data.newPassword, 12);
  await prisma.user.update({ where: { id: session.user.id }, data: { passwordHash } });
  return { message: "Password changed" };
}
```

**Step 3: Write `components/forms/profile-form.tsx`**

```typescript
"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateProfileAction } from "@/lib/actions/profile";

export function ProfileForm({
  defaults,
}: {
  defaults: { name: string; phone: string; profileImageUrl: string };
}) {
  const [state, formAction, pending] = useActionState(updateProfileAction, undefined);
  return (
    <form action={formAction} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" required defaultValue={defaults.name} />
        {state?.errors?.name?.[0] && <p className="text-sm text-red-600">{state.errors.name[0]}</p>}
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" defaultValue={defaults.phone} />
      </div>
      <div>
        <Label htmlFor="profileImageUrl">Profile image URL</Label>
        <Input id="profileImageUrl" name="profileImageUrl" defaultValue={defaults.profileImageUrl} />
      </div>
      {state?.message && <p className="text-sm text-muted-foreground">{state.message}</p>}
      <Button type="submit" disabled={pending}>{pending ? "Saving..." : "Save"}</Button>
    </form>
  );
}
```

**Step 4: Write `app/(tenant)/layout.tsx`**

```typescript
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { NavBar } from "@/components/nav/nav-bar";

export default async function TenantLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session || session.user.role !== "TENANT") redirect("/login");
  return (
    <>
      <NavBar />
      <div className="flex-1 p-6 max-w-5xl mx-auto w-full">{children}</div>
    </>
  );
}
```

**Step 5: Write `app/(tenant)/dashboard/page.tsx`**

```typescript
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function TenantDashboardPage() {
  const session = await auth();
  const tenancy = await prisma.tenancy.findFirst({
    where: { tenantId: session!.user.id, endDate: null },
    include: { room: true },
  });
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome, {session!.user.name}</h1>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Your room</CardTitle>
        </CardHeader>
        <CardContent>
          {tenancy ? (
            <>
              <p>Room {tenancy.room.number} — {tenancy.room.type}</p>
              <p className="text-muted-foreground text-sm mt-1">
                Rent: GHS {(tenancy.monthlyRent / 100).toFixed(2)}/mo
              </p>
            </>
          ) : (
            <p className="text-muted-foreground">No active tenancy. Contact the manager.</p>
          )}
        </CardContent>
      </Card>
      <p className="mt-6 text-sm text-muted-foreground">
        Payments, maintenance requests, and reports are coming in a future update.
      </p>
    </div>
  );
}
```

**Step 6: Write `app/(tenant)/profile/page.tsx`**

```typescript
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { ProfileForm } from "@/components/forms/profile-form";

export default async function ProfilePage() {
  const session = await auth();
  const user = await prisma.user.findUnique({ where: { id: session!.user.id } });
  if (!user) notFound();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <ProfileForm
        defaults={{
          name: user.name,
          phone: user.phone ?? "",
          profileImageUrl: user.profileImageUrl ?? "",
        }}
      />
    </div>
  );
}
```

**Step 7: Commit**

```bash
git add lib/actions/profile.ts 'app/(tenant)/' components/forms/profile-form.tsx components/ui/dialog.tsx
git commit -m "feat(tenant): layout, dashboard placeholder, profile form"
```

---

## Task 13: Seed script

**Files:**
- Create: `prisma/seed.ts`
- Modify: `package.json` (add prisma seed config)

**Step 1: Add seed config to `package.json`**

Add (or merge) the following inside the top-level object:

```json
"prisma": {
  "seed": "tsx prisma/seed.ts"
}
```

Also add `tsx` as a dev dep:

```bash
npm install -D tsx
```

**Step 2: Write `prisma/seed.ts`**

```typescript
import { PrismaClient } from "../lib/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminHash = await bcrypt.hash("admin123", 12);
  const staffHash = await bcrypt.hash("staff123", 12);
  const tenantHash = await bcrypt.hash("tenant123", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@pk.local" },
    update: {},
    create: { email: "admin@pk.local", name: "PK Admin", passwordHash: adminHash, role: "ADMIN" },
  });

  const staff1 = await prisma.user.upsert({
    where: { email: "staff1@pk.local" },
    update: {},
    create: { email: "staff1@pk.local", name: "Akua Mansa", passwordHash: staffHash, role: "STAFF" },
  });
  await prisma.user.upsert({
    where: { email: "staff2@pk.local" },
    update: {},
    create: { email: "staff2@pk.local", name: "Kofi Asante", passwordHash: staffHash, role: "STAFF" },
  });

  const tenantEmails = [
    "tenant1@pk.local", "tenant2@pk.local", "tenant3@pk.local", "tenant4@pk.local",
    "tenant5@pk.local", "tenant6@pk.local", "tenant7@pk.local", "tenant8@pk.local",
  ];
  const tenantNames = [
    "Ama Owusu", "Yaw Boateng", "Esi Tetteh", "Kojo Mensah",
    "Akosua Frimpong", "Kwame Nkrumah", "Adwoa Sarpong", "Kobby Quaye",
  ];
  const tenants = [];
  for (let i = 0; i < tenantEmails.length; i++) {
    const t = await prisma.user.upsert({
      where: { email: tenantEmails[i] },
      update: {},
      create: {
        email: tenantEmails[i], name: tenantNames[i], passwordHash: tenantHash, role: "TENANT",
      },
    });
    tenants.push(t);
  }

  const roomSpecs = [
    { number: "101", type: "1BR", size: "40 sqm", monthlyRent: 150000, status: "AVAILABLE" as const },
    { number: "102", type: "1BR", size: "42 sqm", monthlyRent: 160000, status: "AVAILABLE" as const },
    { number: "103", type: "1BR", size: "45 sqm", monthlyRent: 175000, status: "AVAILABLE" as const },
    { number: "104", type: "2BR", size: "65 sqm", monthlyRent: 250000, status: "AVAILABLE" as const },
    { number: "105", type: "2BR", size: "68 sqm", monthlyRent: 260000, status: "AVAILABLE" as const },
    { number: "201", type: "1BR", size: "42 sqm", monthlyRent: 165000, status: "AVAILABLE" as const },
    { number: "202", type: "2BR", size: "70 sqm", monthlyRent: 275000, status: "AVAILABLE" as const },
    { number: "203", type: "Studio", size: "30 sqm", monthlyRent: 120000, status: "AVAILABLE" as const },
    { number: "204", type: "2BR", size: "72 sqm", monthlyRent: 285000, status: "AVAILABLE" as const },
    { number: "301", type: "Penthouse", size: "110 sqm", monthlyRent: 450000, status: "AVAILABLE" as const },
    { number: "302", type: "2BR", size: "75 sqm", monthlyRent: 300000, status: "MAINTENANCE" as const },
    { number: "303", type: "1BR", size: "48 sqm", monthlyRent: 185000, status: "AVAILABLE" as const },
  ];
  const rooms = [];
  for (const spec of roomSpecs) {
    const r = await prisma.room.upsert({
      where: { number: spec.number },
      update: {},
      create: spec,
    });
    rooms.push(r);
  }

  for (let i = 0; i < tenants.length; i++) {
    const room = rooms[i];
    await prisma.room.update({ where: { id: room.id }, data: { status: "OCCUPIED" } });
    await prisma.tenancy.upsert({
      where: { id: `seed-tenancy-${i}` },
      update: {},
      create: {
        id: `seed-tenancy-${i}`,
        tenantId: tenants[i].id, roomId: room.id, startDate: new Date(), monthlyRent: room.monthlyRent,
      },
    });
  }

  const openReq = await prisma.maintenanceRequest.create({
    data: {
      tenantId: tenants[0].id, roomId: rooms[0].id,
      category: "Plumbing", title: "Leaking kitchen tap",
      description: "The kitchen tap drips constantly.",
      status: "OPEN", priority: "MEDIUM",
    },
  });

  await prisma.notification.create({
    data: {
      userId: tenants[0].id, channel: "IN_APP",
      subject: "Welcome to PK Luxury Apartments",
      body: "Your tenancy has been activated. Contact the manager for any questions.",
      status: "SENT", sentAt: new Date(),
    },
  });

  await prisma.auditLog.create({
    data: { userId: admin.id, action: "seed.run", entityType: "System", payload: "initial seed" },
  });

  await prisma.auditLog.create({
    data: {
      userId: staff1.id, action: "request.create",
      entityType: "MaintenanceRequest", entityId: openReq.id,
    },
  });

  console.log("Seed complete:");
  console.log("  Admin   : admin@pk.local  / admin123");
  console.log("  Staff   : staff1@pk.local / staff123");
  console.log("  Tenant  : tenant1@pk.local / tenant123");
}

main().finally(() => prisma.$disconnect());
```

**Step 3: Run the seed**

```bash
npx prisma db seed
```

Expected: prints "Seed complete:" with credentials.

**Step 4: Verify**

```bash
npx prisma studio --browser none &
sleep 3
kill %1 2>/dev/null || true
```

Or just check counts via a quick script:
```bash
node -e 'const{PrismaClient}=require("./lib/generated/prisma");(async()=>{const p=new PrismaClient();console.log("users:",await p.user.count(),"rooms:",await p.room.count(),"tenancies:",await p.tenancy.count());await p.$disconnect();})();'
```

Expected: users: 11, rooms: 12, tenancies: 8.

**Step 5: Commit**

```bash
git add prisma/seed.ts package.json package-lock.json
git commit -m "feat(db): seed admin, staff, 8 tenants, 12 rooms, tenancies"
```

---

## Task 14: Vitest setup + role-middleware integration test

**Files:**
- Create: `vitest.config.ts`
- Create: `tests/integration/auth.test.ts`

**Step 1: Write `vitest.config.ts`**

```typescript
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
    testTimeout: 20000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
```

**Step 2: Add a script to `package.json`**

Add to `"scripts"`:
```json
"test": "vitest run"
```

**Step 3: Write `tests/integration/auth.test.ts`**

```typescript
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { PrismaClient } from "@/lib/generated/prisma";
import { auth } from "@/lib/auth";
import { NextRequest } from "next/server";
import proxy from "@/proxy";

let prisma: PrismaClient;

beforeAll(async () => {
  prisma = new PrismaClient();
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
    const session = await auth();
    const token = (await import("next-auth/jwt")).encode;
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
```

**Step 4: Run the test**

```bash
npm test 2>&1 | tail -30
```

Expected: 4 tests pass.

**Step 5: Commit**

```bash
git add vitest.config.ts tests/integration/auth.test.ts package.json
git commit -m "test: vitest setup + proxy role-gate integration test"
```

---

## Task 15: Final verification — typecheck, build, manual smoke

**Step 1: Typecheck**

```bash
npx tsc --noEmit 2>&1 | tail -30
```

Expected: zero errors.

**Step 2: Build**

```bash
npm run build 2>&1 | tail -30
```

Expected: successful build.

**Step 3: Manual smoke**

```bash
npm run dev &
sleep 5
curl -sS -o /dev/null -w "%{http_code}\n" http://localhost:3000/
curl -sS -o /dev/null -w "%{http_code}\n" http://localhost:3000/rooms
curl -sS -o /dev/null -w "%{http_code}\n" -L http://localhost:3000/admin/tenants
kill %1 2>/dev/null || true
```

Expected: `/` returns 200, `/rooms` returns 200, `/admin/tenants` (no auth) returns 307 redirect to `/login`.

**Step 4: If anything failed, fix and amend (no need to commit again for a verification pass)**

**Step 5: Final commit if any stray changes**

```bash
git status
git add -A
git diff --cached --quiet || git commit -m "chore: final verification cleanup"
```

---

## Self-review

- **Spec coverage:** every Goals bullet in the spec is covered by a task. Non-goals are all explicitly deferred.
- **Placeholder scan:** no "TBD" or "TODO" in task code.
- **Type consistency:** `ActionState` defined in `lib/validation.ts`, imported everywhere as the same type. `LoginSchema` shared between `lib/validation.ts` and `lib/auth.ts`. Server action signatures use `(state, formData) => state` consistently.
- **Known issue:** Task 7's `loginAction` doesn't redirect on success — `signIn` from `next-auth` v5 throws a `NEXT_REDIRECT` error in server actions; that's the documented pattern. The catch handles `AuthError`; redirect bubbles. This matches the Next.js 16 auth docs.
- **Known issue:** Task 14's `proxy` test imports the proxy file at module level. If `proxy.ts` uses `getToken` from `next-auth/jwt`, the import works but the `secret` env var must be set. `.env` is loaded by Next's dev server but not by Vitest — the test relies on `process.env.AUTH_SECRET` being set. Load it in the test file's `beforeAll` if it errors. Fallback: prepend `import "dotenv/config"` at the top of the test file.
