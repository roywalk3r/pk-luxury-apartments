import { Sidebar } from "./sidebar";
import { AppHeader, PageHeader } from "./header";
import type { ReactNode } from "react";

export function DashboardShell({
  role,
  userName,
  title,
  description,
  actions,
  children,
}: {
  role: "ADMIN" | "STAFF" | "TENANT";
  userName?: string | null;
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="app-shell">
      <div className="hidden lg:block">
        <Sidebar role={role} userName={userName} />
      </div>
      <div className="app-main">
        <AppHeader
          role={role}
          userName={userName}
          title={title}
          description={description}
          actions={actions}
        />
        <div className="app-content">
          <div className="hidden lg:block">
            <PageHeader title={title} description={description} actions={undefined} />
          </div>
          <div className="lg:mt-0 mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
