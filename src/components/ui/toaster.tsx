import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
            key={id}
            {...props}
            className="bg-gradient-to-r from-purple-100 to-gray-100 border-purple-200 shadow-lg"
          >
            <div className="grid gap-1">
              {title && (
                <ToastTitle className="text-purple-900 font-semibold">
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className="text-gray-700">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-purple-600 hover:text-purple-800" />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
