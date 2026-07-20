# System Gap Checklist — PK’s Luxury Apartments Web App

Compared against the functional requirements in `/home/rseann/Downloads/CHAPTER 3 260708.docx`.
Date: 2026-07-20

---

## Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | Implemented |
| ⚠️ | Partially implemented / has issues |
| ❌ | Not implemented |
| 🧪 | Needs testing/verification |

---

## 1. User Registration and Authentication

| Requirement | Status | Notes |
|-------------|--------|-------|
| Management registers new tenants with personal details, room allocation, tenancy start date | ✅ | `createTenantAction` in `lib/actions/tenants.ts` creates user + tenancy atomically. |
| Secure username/password login | ✅ | Auth.js v5 credentials provider with bcrypt cost factor 12. |
| Session-based login/logout for all roles | ✅ | JWT session with role claim. |
| Role-based access control (ADMIN/STAFF/TENANT/PROSPECT) | ✅ | `proxy.ts`, admin layout, tenant layout enforce role gates. |
| Admin can view/edit/deactivate user accounts | ✅ | Tenant edit form exposes the `active` flag; admin can toggle it. |
| Profile picture upload | ✅ | Local file upload saved to `public/images/profiles/` and shown in navbar avatar. |

---

## 2. User Profile Management

| Requirement | Status | Notes |
|-------------|--------|-------|
| Tenants/staff update name, contact number | ✅ | `updateProfileAction` in `lib/actions/profile.ts`. |
| Change password with current password verification | ✅ | `changePasswordAction` in `lib/actions/profile.ts`. |
| Profile picture | ✅ | `uploadProfileImageAction` with file validation and session sync. |

---

## 3. Room Availability and Booking

| Requirement | Status | Notes |
|-------------|--------|-------|
| Display available/occupied rooms with type, size, price | ✅ | `/rooms` page + admin rooms list. |
| Online booking requests without physical visit | ✅ | `createBookingAction` creates a `PROSPECT` user and notifies admins. |
| Real-time room availability updates | ✅ | `room.updateMany` flips status to `OCCUPIED` on tenant creation. |
| Booking confirmation / rejection workflow | ✅ | `/admin/bookings` page with Confirm/Reject actions, creates tenancy + tenant account on confirm. |

---

## 4. Rent Payment Tracking

| Requirement | Status | Notes |
|-------------|--------|-------|
| Record rent payments (date, amount, method) | ✅ | `createPaymentAction` for admin; tenant payment form for self-service. |
| Tenant views complete payment history | ✅ | `/payments` tenant page + `getTenantPayments`. |
| Outstanding/overdue payments flagged | ✅ | Manual + cron: `/api/cron/rent-reminders` detects active tenancies without a confirmed rent payment in the current month. Admin dashboard also has a manual "Send rent reminders" action. |
| PDF receipt after successful payment | ✅ | `/api/receipts/[paymentId]` generates PDF with `@react-pdf/renderer`; tenant/admin payment lists link to receipts. |
| Mobile money / visa / secure payment platforms | ✅ | Paystack initialization + verification for rent and utility bills. Requires live/test key for final end-to-end verification. |
| Admin payment verification/override | ✅ | `createPaymentAction` lets admin record manual payments. |

---

## 5. Utility Bill Tracking

| Requirement | Status | Notes |
|-------------|--------|-------|
| Record and track water bill per tenant | ✅ | `UtilityBill` model, `createBillAction`, tenant `/bills` page. |
| Distinguish utility payments from rent | ✅ | Separate `RentPayment` and `UtilityBill` models. |
| Tenant notified of new bill | ✅ | `notifyNewBill` is called on bill creation and sends in-app/email/SMS. |
| Bill status (UNPAID/PAID/OVERDUE) | ✅ | Status enum + `/api/cron/overdue-bills` auto-marks past-due bills as OVERDUE. Admin can also run a manual overdue check. |
| Online payment of utility bills | ✅ | `initiateBillPayment` + Paystack checkout + verification; bill is marked PAID on success. |

---

## 6. Maintenance Request and Complaint Management

| Requirement | Status | Notes |
|-------------|--------|-------|
| Tenants submit maintenance requests digitally | ✅ | `createMaintenanceRequestAction` + tenant `/maintenance/new` page. |
| Management assigns, tracks, updates request status | ✅ | `updateMaintenanceRequestAction` supports status, priority, assigned staff. |
| Record resolved complaints for future reference | ✅ | `MaintenanceRequest` model stores `resolvedAt`, `updatedAt`, status history is implicit. |
| Tenant real-time notifications on status updates | ✅ | `notifyMaintenanceUpdate` called on admin update; in-app/email/SMS. |
| Prevent recurring issues / item lifespan tracking | ✅ | `Equipment` model with purchase date, lifespan, warranty, service history and status. |
| Staff assignment visibility | ✅ | `assignedToId` relation exists. |

---

## 7. Multi-User and Remote Access

| Requirement | Status | Notes |
|-------------|--------|-------|
| Multiple accounts with permission levels | ✅ | Roles: ADMIN, STAFF, TENANT, PROSPECT. |
| Remote access from internet-enabled device | ✅ | Web app; proxy role gates route by role. |
| Staff-specific capabilities | ⚠️ | STAFF is treated same as ADMIN in most gates; no granular permission matrix. Acceptable for scope. |

---

## 8. Automated Notifications and Alerts

| Requirement | Status | Notes |
|-------------|--------|-------|
| SMS/on-screen notifications for rent due dates | ✅ | Cron endpoint `/api/cron/rent-reminders` + manual dashboard action. |
| Complaint/maintenance update notifications | ✅ | In-app notifications created; email/SMS gated by env config. |
| Admin alerts for new maintenance requests | ✅ | `notifyAdmins` called on new request. |
| Important announcements broadcast | ✅ | `/admin/announcements` page sends in-app/email/SMS to all tenants. |
| Notification read/unread status | ✅ | `readAt` field is set by `markNotificationRead`; `getUnreadCount` counts unread correctly. |
| Notification bell UI | ✅ | `NotificationBell` component exists. |

---

## 9. Admin Dashboard and Reports

| Requirement | Status | Notes |
|-------------|--------|-------|
| Admin dashboard overview (tenants, payments, complaints) | ✅ | `getAdminDashboardStats` + charts. |
| Generate/export reports | ✅ | `/admin/reports` has a CSV export button driven by `exportReportsCsv`. |
| Filter reports by date range, tenant name, room number | ⚠️ | Date-range and maintenance status filters exist; tenant/room filters not yet added. |
| Reports on payments, occupancy, maintenance | ✅ | Summary cards and tables for rooms, payments, bills, maintenance. |

---

## 10. Supporting Services / Integrations

| Component | Status | Notes |
|-----------|--------|-------|
| Web-based platform | ✅ | Next.js 16 app. |
| Payment gateway (Paystack) | 🧪 | Code complete for rent and bill payments; needs live/test key verification. |
| PDF receipt generator | ✅ | `@react-pdf/renderer` component + API routes for rent and bill receipts. |
| Email system (SMTP/nodemailer) | ✅ | `lib/services/email.ts` complete; requires SMTP credentials. Falls back to console log when unconfigured. |
| SMS gateway (mNotify) | ✅ | `lib/services/sms.ts` complete; requires mNotify API key. Falls back to console log when unconfigured. |

---

## 11. Data / Database

| Item | Status | Notes |
|------|--------|-------|
| Centralized structured database | ✅ | Prisma + MySQL 8.4 via Docker. |
| MySQL (as thesis claims) | ✅ | `pk-mysql` container on port 3306; `prisma.schema` uses MySQL provider. |
| Audit log | ✅ | `AuditLog` model written on key actions. |
| Soft delete / archive | ⚠️ | `active` flag on User; `archiveRoomAction` exists but no `deletedAt`/soft delete model-wide. |
| Data integrity / constraints | ✅ | Prisma relations, enums, unique constraints. |

---

## 12. Testing

| Item | Status | Notes |
|------|--------|-------|
| Unit/integration tests | ⚠️ | 4 auth proxy integration tests pass; payment, maintenance, bill, notification flows have no automated tests. |
| End-to-end Paystack test | 🧪 | Not automated; requires Paystack test/live credentials. |
| Email/SMS notification test | 🧪 | Services fall back to console logs without credentials; no automated test. |
| PDF receipt generation test | 🧪 | No automated test; routes are present and compile. |

---

## 13. UI/UX Polish

| Item | Status | Notes |
|------|--------|-------|
| Responsive design | ✅ | Tailwind v4 + mobile nav. |
| Landing page styling | ✅ | Light-only theme enforced; landing page renders with intended light background. |
| Loading/error states | ⚠️ | `Skeleton` exists but not used everywhere. |
| Empty states | ⚠️ | Some pages have "No X recorded yet" text; verify all list pages. |
| Toast / flash messages | ✅ | `sonner` `ToastProvider` in root layout + `FormToast` on action forms. |

---

## Priority Gaps to Close

1. **End-to-end Paystack verification** — run a real transaction with test credentials and confirm redirect/receipt/email flow.
2. **Automated tests for payment / bill / maintenance / notification flows** — add vitest coverage beyond auth proxy.
3. **Report tenant/room filters** — extend `/admin/reports` filter form to filter by tenant or room.
4. **Skeleton/loading states** — add to list pages that still show blank while data loads.

---

## Summary

- **Core modules done:** Auth, rooms, tenants, profile, admin/tenant dashboards, maintenance requests, payments, billing, booking workflow, reports, equipment tracking, announcements, reminders.
- **Mostly code-complete but needs credentials/testing:** Paystack, email, SMS, PDF receipt downloads.
- **Remaining low-priority polish:** extra report filters, broader loading skeletons, and expanded automated tests.
