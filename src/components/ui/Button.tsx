import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string
    external?: boolean
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const baseStyles = cn(
  'relative inline-flex items-center justify-center font-sans font-medium',
  'transition-all duration-300 ease-out-expo',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed'
)

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    'bg-forest-900 text-ivory-100 rounded-lg overflow-hidden',
    'before:absolute before:inset-0 before:bg-gradient-copper before:opacity-0 before:transition-opacity before:duration-500',
    'hover:before:opacity-100 hover:shadow-copper-glow hover:-translate-y-0.5',
    '[&>*]:relative [&>*]:z-10'
  ),
  secondary: cn(
    'bg-transparent text-forest-900 rounded-lg',
    'border border-forest-900/20',
    'hover:border-forest-900 hover:bg-forest-900/5'
  ),
  accent: cn(
    'bg-gradient-copper text-white rounded-lg',
    'shadow-copper-glow',
    'hover:shadow-elevated hover:-translate-y-0.5'
  ),
  ghost: cn(
    'text-charcoal-700',
    'hover:text-forest-900'
  ),
  outline: cn(
    'bg-transparent text-forest-900 rounded-lg',
    'border-2 border-forest-900',
    'hover:bg-forest-900 hover:text-ivory-100'
  ),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm gap-2 tracking-wide',
  md: 'px-6 py-3.5 text-sm gap-2.5 tracking-wide',
  lg: 'px-8 py-4 text-base gap-3 tracking-wide',
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    className,
    icon,
    iconPosition = 'left',
    ...rest
  } = props

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="flex-shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  )

  if ('href' in rest && rest.href) {
    const { href, external, ...linkProps } = rest as ButtonAsLink

    if (external) {
      return (
        <a
          href={href}
          className={cn(classes, 'group')}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {content}
        </a>
      )
    }

    return (
      <Link href={href} className={cn(classes, 'group')} {...linkProps}>
        {content}
      </Link>
    )
  }

  return (
    <button className={cn(classes, 'group')} {...(rest as ButtonAsButton)}>
      {content}
    </button>
  )
}
