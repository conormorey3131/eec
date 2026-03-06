import { cn } from '@/lib/utils'
import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, forwardRef, ReactNode } from 'react'

interface LabelProps {
  htmlFor: string
  children: ReactNode
  required?: boolean
  className?: string
}

export function Label({ htmlFor, children, required, className }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn('block text-sm font-medium text-forest-900 mb-2', className)}
    >
      {children}
      {required && <span className="text-copper-600 ml-0.5">*</span>}
    </label>
  )
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3.5 text-base rounded-xl border bg-white transition-all duration-300',
            'placeholder:text-charcoal-400',
            'focus:outline-none focus:ring-2 focus:ring-forest-900/20 focus:border-forest-900',
            'disabled:bg-ivory-100 disabled:text-charcoal-500 disabled:cursor-not-allowed',
            error
              ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500'
              : 'border-charcoal-200 hover:border-charcoal-300',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          ref={ref}
          className={cn(
            'w-full px-4 py-3.5 text-base rounded-xl border bg-white transition-all duration-300 resize-y min-h-[140px]',
            'placeholder:text-charcoal-400',
            'focus:outline-none focus:ring-2 focus:ring-forest-900/20 focus:border-forest-900',
            'disabled:bg-ivory-100 disabled:text-charcoal-500 disabled:cursor-not-allowed',
            error
              ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500'
              : 'border-charcoal-200 hover:border-charcoal-300',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string
  children: ReactNode
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              'w-full px-4 py-3.5 text-base rounded-xl border bg-white transition-all duration-300 appearance-none pr-12',
              'focus:outline-none focus:ring-2 focus:ring-forest-900/20 focus:border-forest-900',
              'disabled:bg-ivory-100 disabled:text-charcoal-500 disabled:cursor-not-allowed',
              error
                ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500'
                : 'border-charcoal-200 hover:border-charcoal-300',
              className
            )}
            {...props}
          >
            {children}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
            <svg className="h-5 w-5 text-charcoal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    )
  }
)
Select.displayName = 'Select'
