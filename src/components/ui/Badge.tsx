import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type BadgeVariant = 'default' | 'primary' | 'accent' | 'success' | 'outline' | 'dark'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  size?: 'sm' | 'md'
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-ivory-200 text-charcoal-700',
  primary: 'bg-forest-900 text-ivory-100',
  accent: 'bg-copper-500 text-white',
  success: 'bg-emerald-100 text-emerald-800',
  outline: 'border border-charcoal-200 text-charcoal-700 bg-transparent',
  dark: 'bg-charcoal-900 text-ivory-100',
}

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
}

export function Badge({ children, variant = 'default', size = 'md', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full tracking-wide',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  )
}
