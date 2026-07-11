import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
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
        <Link href="/rooms" className={buttonVariants()}>
          Browse rooms ({availableCount} available)
        </Link>
        <Link href="/login" className={buttonVariants({ variant: "outline" })}>
          Sign in
        </Link>
      </div>
    </main>
  );
}
