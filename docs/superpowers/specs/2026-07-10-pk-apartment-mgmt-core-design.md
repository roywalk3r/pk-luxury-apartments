# PK Luxury Apartments — Management System (Sub-project 1: Core)

**Date:** 2026-07-10
**Status:** Draft — awaiting user review
**Branch:** `feat/pk-apartment-core`
**Scope:** Sub-project 1 of 3 (Core). Payments/Utilities, Maintenance, and Reports come later.

## 1. Context

The thesis chapter (Chapter 3, "Research Methodology") at `~/Downloads/CHAPTER 3 260708.docx` describes a web-based apartment management system for PK's Luxury Apartments in Haatso, Ghana, built using Design Science Research Methodology. The full chapter enumerates nine functional areas: auth, profile, room availability/booking, rent payments, utility bills, maintenance/complaints, multi-user access, notifications, and admin reports.

This spec covers **only Sub-project 1 (Core)**: data model, authentication, role-based access, and admin CRUD for rooms and tenants. The remaining three feature areas will get their own spec → plan → code cycles.

## 2. Goals & non-goals

**Goals**
- Stand up a runnable Next.js 16 + Prisma + SQLite + Auth.js application.
- Define the full Prisma schema for all 9 future features (avoids breaking migrations later).
- Implement authentication (register, login, logout) and session-based role middleware.
- Implement admin CRUD for rooms and tenants.
- Implement the public landing page and public room list.
- Seed realistic data: 1 admin, 2 staff, 8 tenants, 12 rooms, a few sample tenancies.
- Provide Vitest setup with one integration test proving the role middleware works.

**Non-goals (deferred)**
- Rent payment processing and PDF receipts → Sub-project 2.
- Utility bill tracking (water) → Sub-project 2.
- Maintenance request / complaint management → Sub-project 3.
- Admin dashboard KPIs, filtered reports → Sub-project 3.
- SMS/email notifications → added with the feature that needs them.
- Real Mobile Money / Visa gateway integration → stubbed in Sub-project 2.

## 3. Architecture

Single Next.js 16 application, App Router, server-first. One Prisma-managed SQLite file at `prisma/dev.db`. Auth.js v5 with credentials provider, JWT session, role claim.

### Route groups

| Group | Path prefix | Access |
|---|---|---|
| `(public)` | `/`, `/rooms`, `/book/[roomId]` | Anyone |
| `(auth)` | `/login` | Unauthenticated only (tenant accounts are created by admin, not self-registered) |
| `(tenant)` | `/dashboard`, `/profile` | TENANT |
| `(admin)` | `/admin/*` | ADMIN, STAFF (read-only on some) |

`middleware.ts` reads the JWT role claim and gates route prefixes.

### Layered structure

```
app/                 # App Router routes
  (public)/
  (auth)/
  (tenant)/
  (admin)/
  api/auth/[...nextauth]/route.ts
components/
  ui/                # shadcn primitives
  forms/             # typed form wrappers (shadcn + react-hook-form + Zod)
lib/
  db.ts              # Prisma client singleton
  auth.ts            # Auth.js v5 config
  validation.ts      # Zod schemas (one per domain)
  queries/           # typed server actions / data loaders
  utils.ts
prisma/
  schema.prisma
  seed.ts
tests/
  integration/auth.test.ts
middleware.ts
```

## 4. Data model (full schema — not just core)

The full schema is committed now so later sub-projects only add features, not tables.

```prisma
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

  tenancies          Tenancy[]          @relation("TenantTenancies")
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
  monthlyRent  Int        // GHS, in pesewas (integer cents)
  status       RoomStatus @default(AVAILABLE)
  description  String?
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt

  tenancies    Tenancy[]
  requests     MaintenanceRequest[]
}

model Tenancy {
  id           String    @id @default(cuid())
  tenantId     String
  roomId       String
  startDate    DateTime
  endDate      DateTime?
  monthlyRent  Int
  createdAt    DateTime  @default(now())

  tenant   User @relation("TenantTenancies", fields: [tenantId], references: [id])
  room     Room @relation(fields: [roomId], references: [id])
  payments RentPayment[]
  utilities UtilityBill[]

  @@index([tenantId])
  @@index([roomId])
}

model RentPayment {
  id          String        @id @default(cuid())
  tenancyId   String
  amount      Int
  method      PaymentMethod
  status      PaymentStatus @default(PENDING)
  paidAt      DateTime?
  reference   String?
  receiptUrl  String?
  createdAt   DateTime      @default(now())

  tenancy Tenancy @relation(fields: [tenancyId], references: [id])

  @@index([tenancyId])
  @@index([status])
}

model UtilityBill {
  id        String     @id @default(cuid())
  tenancyId String
  type      UtilityType @default(WATER)
  amount    Int
  dueDate   DateTime
  status    BillStatus @default(UNPAID)
  paidAt    DateTime?
  receiptUrl String?
  createdAt DateTime   @default(now())

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

## 5. Authentication

- Library: **Auth.js v5** (`next-auth@5`) with credentials provider.
- Passwords: **bcrypt** (12 rounds).
- Session: **JWT strategy** with `role` claim and `userId`.
- `/register` is **admin-only** (a staff/admin user creates tenant accounts from the admin panel — no public sign-up, per chapter 3.4.2.1).
- Middleware: `middleware.ts` checks the JWT role and redirects unauthorized users to `/login` or `/`.

## 6. Public surfaces (sub-project 1)

- `GET /` — landing page with hero, brief about, "Browse rooms" CTA.
- `GET /rooms` — public list of `AVAILABLE` rooms (number, type, size, rent).
- `GET /book/[roomId]` — public booking request form (creates a `PROSPECT` user + a `Tenancy` in `OPEN` state — not yet built; for sub-project 1 this route is a stub page).

## 7. Admin CRUD (sub-project 1)

| Path | Method | Purpose |
|---|---|---|
| `/admin/dashboard` | GET | Welcome + counts (rooms, tenants, staff) — numbers only, no KPIs |
| `/admin/rooms` | GET | List rooms with filter by status |
| `/admin/rooms/new` | GET/POST | Create room |
| `/admin/rooms/[id]` | GET/POST | Edit / soft-archive room |
| `/admin/tenants` | GET | List tenants with search |
| `/admin/tenants/new` | GET/POST | Register tenant (creates User + Tenancy) |
| `/admin/tenants/[id]` | GET/POST | Edit / deactivate tenant |

All forms use react-hook-form + Zod resolver. All actions go through server actions in `lib/queries/`. Each mutation writes an `AuditLog` entry.

## 8. Tenant surfaces (sub-project 1)

- `/dashboard` — placeholder showing "Welcome, {name}" and a notice that more features are coming.
- `/profile` — edit own name, phone, profile image URL; change password.

## 9. Library choices

| Concern | Choice | Reason |
|---|---|---|
| Framework | Next.js 16 (already installed) | Project requirement |
| DB | Prisma + SQLite | User chose Prisma; SQLite fits <30 tenants, zero setup |
| Auth | Auth.js v5 (next-auth@5) | Mature, role-friendly, works with App Router |
| Password hashing | bcrypt | Standard, simple |
| Validation | Zod | Per global CLAUDE.md |
| Forms | react-hook-form + @hookform/resolvers + Zod | Per global CLAUDE.md |
| UI primitives | shadcn/ui (already initialized) | Per global CLAUDE.md |
| State (server) | React Query (already installed) | Per global CLAUDE.md |
| Testing | Vitest + @testing-library/react | Standard, fast |

## 10. Error handling

- All API routes / server actions validate with Zod, return typed errors.
- Server action shape: `{ ok: true, data } | { ok: false, error: string, fieldErrors?: Record<string,string> }`.
- Form components render `fieldErrors` next to inputs.
- Unexpected errors caught at the boundary return a generic "Something went wrong" toast.

## 11. Testing

- `npm test` runs Vitest.
- One integration test: login as admin, hit `/admin/tenants`, expect 200; login as tenant, hit `/admin/tenants`, expect redirect to `/`.
- One unit test per Zod schema (auth, room, tenant).

## 12. Seed data (`prisma/seed.ts`)

- 1 admin: `admin@pk.local` / `admin123`
- 2 staff: `staff1@pk.local` / `staff123`, `staff2@pk.local` / `staff123`
- 8 tenants: `tenant1@pk.local` … `tenant8@pk.local` / `tenant123`
- 12 rooms: mix of 1BR and 2BR, GHS 1,500–4,500/month
- 8 tenancies: each tenant linked to a room
- A few sample `MaintenanceRequest` rows (so the model is exercised even though the UI is later)
- A few `Notification` rows

## 13. Out-of-scope reminders

- No real payment gateway. Sub-project 2 will introduce a stub that logs to `Notification`.
- No real SMS/email. Adapter interface lives in `lib/notifications/` and is added when first needed.
- No file upload — `profileImageUrl` is a free-text URL for now.

## 14. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Next.js 16 has breaking changes from training data (per AGENTS.md) | Read relevant docs in `node_modules/next/dist/docs/01-app/` before writing App Router code |
| Auth.js v5 is still beta | Pin to a known-good version, smoke test login before declaring done |
| SQLite + Prisma `Int` (BigInt) for money in pesewas | Use `Int` and document that amounts are integer pesewas |
| Schema is bigger than sub-project 1 needs | Acceptable: avoids future migrations, seed still exercises all models |
