import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

// Definindo o tipo ClassValue
type ClassValue = string | undefined | null | boolean | ClassValue[]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
