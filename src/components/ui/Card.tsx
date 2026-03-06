import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  href?: string
  hover?: boolean
  variant?: 'default' | 'elevated' | 'editorial'
}

export function Card({ children, className, href, hover = false, variant = 'default' }: CardProps) {
  const variantStyles = {
    default: 'bg-white border-charcoal-100/50',
    elevated: 'bg-white border-charcoal-100/50 shadow-elevated',
    editorial: 'bg-ivory-100 border-charcoal-100/50',
  }

  const baseStyles = cn(
    'rounded-2xl border overflow-hidden',
    variantStyles[variant],
    hover && 'transition-all duration-500 ease-out-expo hover:shadow-elevated hover:border-charcoal-200/50 hover:-translate-y-1',
    className
  )

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, 'block group')}>
        {children}
      </Link>
    )
  }

  return <div className={baseStyles}>{children}</div>
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn('p-6 sm:p-8 pb-0', className)}>{children}</div>
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('p-6 sm:p-8', className)}>{children}</div>
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('p-6 sm:p-8 pt-0 mt-auto', className)}>{children}</div>
  )
}
