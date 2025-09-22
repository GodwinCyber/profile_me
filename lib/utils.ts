import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to merge Tailwind CSS classes with clsx.
 * It allows for conditional class names and resolves conflicting classes.
 * This is a common utility in Tailwind CSS projects to keep class names clean and maintainable.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
