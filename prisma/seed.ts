import { prisma } from "../lib/db";
import bcrypt from "bcryptjs";

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
