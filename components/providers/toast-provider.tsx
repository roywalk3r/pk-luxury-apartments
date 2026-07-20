import { Toaster } from "@/components/ui/sonner";
import { FlashToast } from "./flash-toast";
import { getFlashMessage } from "@/lib/flash";

export async function ToastProvider() {
  const flash = await getFlashMessage();
  return (
    <>
      <Toaster position="top-right" richColors closeButton />
      <FlashToast message={flash?.message ?? null} type={flash?.type} />
    </>
  );
}
