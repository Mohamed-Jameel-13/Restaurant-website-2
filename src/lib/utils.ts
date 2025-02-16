import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useDarkMode() {
  const hours = new Date().getHours();
  return hours >= 18 || hours < 6;
}