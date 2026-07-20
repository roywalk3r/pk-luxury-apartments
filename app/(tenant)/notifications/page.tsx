import { getMyNotifications, markNotificationRead } from "@/lib/actions/notifications";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function MarkReadButton({ id }: { id: string }) {
  return (
    <form action={markNotificationRead.bind(null, id)}>
      <Button type="submit" variant="ghost" size="sm">
        Mark read
      </Button>
    </form>
  );
}

export default async function NotificationsPage() {
  const notifications = await getMyNotifications();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Notifications</h1>
        <p className="text-muted-foreground">Updates about payments, maintenance and announcements.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {notifications.length === 0 && <p className="text-sm text-muted-foreground">No notifications yet.</p>}
          {notifications.map((n) => {
            const isUnread = n.status === "SENT" && !n.readAt;
            return (
              <div
                key={n.id}
                className={cn(
                  "rounded-lg border p-4",
                  isUnread && "bg-primary/5 border-primary/20"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-medium">{n.subject}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{n.body}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{new Date(n.createdAt).toLocaleString()}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant={isUnread ? "default" : "secondary"}>
                      {isUnread ? "Unread" : "Read"}
                    </Badge>
                    {isUnread && <MarkReadButton id={n.id} />}
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
