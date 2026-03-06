import { clsx, type ClassValue } from 'clsx'

// Utility for combining class names
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// Format phone number for display
export function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')
}

// Generate canonical URL
export function getCanonicalUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://efficientenergy.ie'
  return `${baseUrl}${path}`
}

// Truncate text for meta descriptions
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength - 3) + '...'
}
