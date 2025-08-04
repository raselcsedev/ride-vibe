"use client";
import { toast } from "sonner";

interface toastProps {
  type: "success" | "error";
  title: string;
  description?: string;
}

export const ShowToast = ({ type, title, description }: toastProps) => {
  if (type === "success") {
    toast.success(title, { description });
  } else if (type === "error") {
    toast.error(title, { description });
  }
};
