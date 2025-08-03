import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const RandomString = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// dateTime
export const formatDate = (date: any,type:string="DD MMM YYYY") => {
  return dayjs(date).format(type);
};
export const formatTime = (date: any) => {
  return dayjs(date).format("h:s A");
};

export const formatDateTime = (date: any) => {
  return dayjs(date).format("h:s A - DD MMM YYYY");
};

// fromData payload
export const modifyPayload = (values: any) => {
  const obj = { ...values };
  const file = obj["file"];
  delete obj["file"];
  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", data);
  formData.append("file", file);
  return formData;
};

// LocalStroage
export const setLocalStroage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") return "";
  return localStorage.setItem(key, token);
};
export const localStroageRemove = (key: string) => {
  if (!key || typeof window === "undefined") return "";
  return localStorage.removeItem(key);
};

export const getLocalStroage = (key: string) => {
  if (!key || typeof window === "undefined") return "";
  return localStorage.getItem(key);
};

// delay Time
export const delay = (ms: number=4000) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// placeholder Image
export const PlaceholderImg = (
  width: number = 600,
  height: number = 400
): string => {
  return `https://placehold.co/${width}x${height}.png`;
};
