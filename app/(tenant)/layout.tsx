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
