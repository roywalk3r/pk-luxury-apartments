"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateProfileAction, changePasswordAction, uploadProfileImageAction } from "@/lib/actions/profile";
import { FormToast } from "@/components/forms/form-toast";
import { Camera, User } from "lucide-react";

type Props = { user: { id: string; name: string; email: string; phone: string | null; profileImageUrl: string | null } };

export function ProfileForm({ user }: Props) {
  const [profileState, profileAction, profilePending] = useActionState(updateProfileAction, undefined);
  const [imageState, imageAction, imagePending] = useActionState(uploadProfileImageAction, undefined);
  const [passwordState, passwordAction, passwordPending] = useActionState(changePasswordAction, undefined);

  const currentImage = (imageState?.profileImageUrl as string | undefined) || user.profileImageUrl;
  const initials = user.name.charAt(0).toUpperCase();

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 max-w-md">
        <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-muted">
          {currentImage ? (
            <img src={currentImage} alt={user.name} className="h-full w-full object-cover" />
          ) : (
            <User className="h-8 w-8 text-muted-foreground" />
          )}
        </div>
        <form action={imageAction} className="flex flex-1 items-center gap-3">
          <FormToast state={imageState} />
          <div className="flex-1 space-y-1">
            <Label htmlFor="image" className="text-sm font-medium">
              Profile picture
            </Label>
            <Input id="image" name="image" type="file" accept="image/jpeg,image/png,image/webp" disabled={imagePending} />
            {imageState?.errors?.image?.[0] && <p className="text-sm text-red-600">{imageState.errors.image[0]}</p>}
          </div>
          <Button type="submit" size="sm" disabled={imagePending} className="gap-1">
            <Camera className="h-4 w-4" />
            {imagePending ? "Uploading..." : "Upload"}
          </Button>
        </form>
      </div>

      <form action={profileAction} className="space-y-4 max-w-md">
        <FormToast state={profileState} />
        <h2 className="text-xl font-semibold">Profile</h2>
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required defaultValue={user.name} />
          {profileState?.errors?.name?.[0] && <p className="text-sm text-red-600">{profileState.errors.name[0]}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" disabled defaultValue={user.email} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" defaultValue={user.phone ?? ""} />
        </div>
        <Button type="submit" disabled={profilePending}>Update profile</Button>
      </form>

      <form action={passwordAction} className="space-y-4 max-w-md">
        <FormToast state={passwordState} />
        <h2 className="text-xl font-semibold">Change password</h2>
        <div className="space-y-2">
          <Label htmlFor="currentPassword">Current password</Label>
          <Input id="currentPassword" name="currentPassword" type="password" required />
          {passwordState?.errors?.currentPassword?.[0] && <p className="text-sm text-red-600">{passwordState.errors.currentPassword[0]}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="newPassword">New password</Label>
          <Input id="newPassword" name="newPassword" type="password" required minLength={6} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm new password</Label>
          <Input id="confirmPassword" name="confirmPassword" type="password" required />
          {passwordState?.errors?.confirmPassword?.[0] && <p className="text-sm text-red-600">{passwordState.errors.confirmPassword[0]}</p>}
        </div>
        <Button type="submit" disabled={passwordPending}>Change password</Button>
      </form>
    </div>
  );
}
