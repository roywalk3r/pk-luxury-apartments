import { prisma } from "../lib/db";
import bcrypt from "bcryptjs";

async function main() {
  const adminHash = await bcrypt.hash("admin123", 12);
  const staffHash = await bcrypt.hash("staff123", 12);
  const tenantHash = await bcrypt.hash("tenant123", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: { email: "admin@example.com", name: "PK Admin", passwordHash: adminHash, role: "ADMIN" },
  });

  const staff1 = await prisma.user.upsert({
    where: { email: "staff1@example.com" },
    update: {},
    create: { email: "staff1@example.com", name: "Akua Mansa", passwordHash: staffHash, role: "STAFF" },
  });
  const staff2 = await prisma.user.upsert({
    where: { email: "staff2@example.com" },
    update: {},
    create: { email: "staff2@example.com", name: "Kofi Asante", passwordHash: staffHash, role: "STAFF" },
  });

  const tenantEmails = [
    "tenant1@example.com", "tenant2@example.com", "tenant3@example.com", "tenant4@example.com",
    "tenant5@example.com", "tenant6@example.com", "tenant7@example.com", "tenant8@example.com",
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
        email: tenantEmails[i], name: tenantNames[i], passwordHash: tenantHash, role: "TENANT", phone: `024000000${i + 1}`,
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

  const tenancies = [];
  for (let i = 0; i < tenants.length; i++) {
    const room = rooms[i];
    await prisma.room.update({ where: { id: room.id }, data: { status: "OCCUPIED" } });
    const t = await prisma.tenancy.upsert({
      where: { id: `seed-tenancy-${i}` },
      update: {},
      create: {
        id: `seed-tenancy-${i}`,
        tenantId: tenants[i].id, roomId: room.id, startDate: new Date(2026, 0, 1), monthlyRent: room.monthlyRent,
      },
    });
    tenancies.push(t);
  }

  // Demo payments: some confirmed, some pending
  const paymentData = [
    { tenancyIdx: 0, amount: 150000, method: "MOMO" as const, status: "CONFIRMED" as const, monthsAgo: 0 },
    { tenancyIdx: 0, amount: 150000, method: "MOMO" as const, status: "CONFIRMED" as const, monthsAgo: 1 },
    { tenancyIdx: 1, amount: 160000, method: "CASH" as const, status: "CONFIRMED" as const, monthsAgo: 0 },
    { tenancyIdx: 2, amount: 175000, method: "VISA" as const, status: "PENDING" as const, monthsAgo: 0 },
    { tenancyIdx: 3, amount: 250000, method: "MOMO" as const, status: "CONFIRMED" as const, monthsAgo: 0 },
    { tenancyIdx: 4, amount: 260000, method: "MOMO" as const, status: "CONFIRMED" as const, monthsAgo: 1 },
    { tenancyIdx: 5, amount: 165000, method: "OTHER" as const, status: "CONFIRMED" as const, monthsAgo: 0 },
    { tenancyIdx: 6, amount: 120000, method: "MOMO" as const, status: "CONFIRMED" as const, monthsAgo: 2 },
  ];
  for (const p of paymentData) {
    const paidAt = new Date();
    paidAt.setMonth(paidAt.getMonth() - p.monthsAgo);
    const payment = await prisma.rentPayment.create({
      data: {
        tenancyId: tenancies[p.tenancyIdx].id,
        amount: p.amount,
        method: p.method,
        status: p.status,
        paidAt,
        reference: `REF-${Math.floor(Math.random() * 1000000)}`,
        receiptUrl: "",
      },
    });
    await prisma.rentPayment.update({
      where: { id: payment.id },
      data: { receiptUrl: `/api/receipts/${payment.id}` },
    });
  }

  // Demo utility bills
  const billData = [
    { tenancyIdx: 0, amount: 8000, status: "PAID" as const, dueOffset: -10 },
    { tenancyIdx: 0, amount: 6500, status: "UNPAID" as const, dueOffset: 15 },
    { tenancyIdx: 1, amount: 7200, status: "PAID" as const, dueOffset: -5 },
    { tenancyIdx: 3, amount: 9500, status: "OVERDUE" as const, dueOffset: -20 },
    { tenancyIdx: 5, amount: 6000, status: "UNPAID" as const, dueOffset: 10 },
  ];
  for (const b of billData) {
    const due = new Date();
    due.setDate(due.getDate() + b.dueOffset);
    await prisma.utilityBill.create({
      data: {
        tenancyId: tenancies[b.tenancyIdx].id,
        amount: b.amount,
        dueDate: due,
        status: b.status,
        paidAt: b.status === "PAID" ? new Date() : null,
      },
    });
  }

  // Demo maintenance requests
  const requestData = [
    { tenantIdx: 0, roomIdx: 0, category: "Plumbing", title: "Leaking kitchen tap", description: "The kitchen tap drips constantly even when turned off tightly.", status: "OPEN" as const, priority: "MEDIUM" as const },
    { tenantIdx: 1, roomIdx: 1, category: "Electrical", title: "Bedroom socket not working", description: "The socket near the bed stopped working after a power surge.", status: "ASSIGNED" as const, priority: "HIGH" as const, assignedToId: staff1.id },
    { tenantIdx: 3, roomIdx: 3, category: "Carpentry", title: "Loose wardrobe door", description: "The left wardrobe door hinge is loose and the door does not close.", status: "IN_PROGRESS" as const, priority: "LOW" as const, assignedToId: staff2.id },
    { tenantIdx: 5, roomIdx: 5, category: "Appliance", title: "Air conditioner noisy", description: "The AC unit makes a loud rattling sound when cooling.", status: "RESOLVED" as const, priority: "MEDIUM" as const, assignedToId: staff1.id },
  ];
  for (const r of requestData) {
    await prisma.maintenanceRequest.create({
      data: {
        tenantId: tenants[r.tenantIdx].id,
        roomId: rooms[r.roomIdx].id,
        category: r.category,
        title: r.title,
        description: r.description,
        status: r.status,
        priority: r.priority,
        assignedToId: r.assignedToId || null,
        resolvedAt: r.status === "RESOLVED" ? new Date() : null,
      },
    });
  }

  await prisma.notification.create({
    data: {
      userId: tenants[0].id, channel: "IN_APP",
      subject: "Welcome to PK Luxury Apartments",
      body: "Your tenancy has been activated. Contact the manager for any questions.",
      status: "SENT", sentAt: new Date(),
    },
  });

  await prisma.notification.create({
    data: {
      userId: tenants[2].id, channel: "IN_APP",
      subject: "Rent payment pending",
      body: "Your recent rent payment is awaiting confirmation by management.",
      status: "SENT", sentAt: new Date(),
    },
  });

  const equipmentData = [
    { name: "Split Air Conditioner", type: "HVAC", location: "Room 101", serialNumber: "AC-101-2024", purchaseDate: new Date(2024, 2, 15), lifespanMonths: 96, status: "ACTIVE" as const },
    { name: "Water Heater", type: "Plumbing", location: "Room 102", serialNumber: "WH-102-2023", purchaseDate: new Date(2023, 5, 10), lifespanMonths: 72, status: "ACTIVE" as const, lastServicedAt: new Date(2026, 5, 10) },
    { name: "Standby Generator", type: "Power", location: "Basement", serialNumber: "GEN-001-2022", purchaseDate: new Date(2022, 0, 20), lifespanMonths: 120, status: "UNDER_MAINTENANCE" as const, warrantyExpiry: new Date(2027, 0, 20), lastServicedAt: new Date(2026, 6, 1) },
    { name: "Refrigerator", type: "Appliance", location: "Room 201", serialNumber: "FR-201-2021", purchaseDate: new Date(2021, 8, 5), lifespanMonths: 84, status: "RETIRED" as const },
    { name: "CCTV Camera", type: "Security", location: "Main gate", serialNumber: "CCTV-GATE-2024", purchaseDate: new Date(2024, 3, 12), lifespanMonths: 60, status: "ACTIVE" as const, warrantyExpiry: new Date(2026, 3, 12) },
  ];
  for (const e of equipmentData) {
    await prisma.equipment.upsert({
      where: { serialNumber: e.serialNumber },
      update: {},
      create: e,
    });
  }

  await prisma.auditLog.create({
    data: { userId: admin.id, action: "seed.run", entityType: "System", payload: "initial seed" },
  });

  console.log("Seed complete:");
  console.log("  Admin   : admin@example.com  / admin123");
  console.log("  Staff   : staff1@example.com / staff123");
  console.log("  Tenant  : tenant1@example.com / tenant123");
  console.log("  Rooms   :", rooms.length);
  console.log("  Payments:", paymentData.length);
  console.log("  Bills   :", billData.length);
  console.log("  Requests:", requestData.length);
  console.log("  Equipment:", equipmentData.length);
}

main().finally(() => prisma.$disconnect());
