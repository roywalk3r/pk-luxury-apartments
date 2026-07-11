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
