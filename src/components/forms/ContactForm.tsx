'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Input, Textarea, Select, Label } from '@/components/ui/Input'
import { CheckIcon, ArrowRightIcon } from '@/components/ui/Icons'

const services = [
  { value: 'EU Taxonomy Report', label: 'EU Taxonomy Report' },
  { value: 'BER Certificate', label: 'BER Certificate' },
  { value: 'Ventilation Validation', label: 'Ventilation Validation' },
  { value: 'Air Leakage Testing', label: 'Air Leakage Testing' },
  { value: 'Acoustic Testing', label: 'Acoustic Testing' },
  { value: 'Other / Multiple Services', label: 'Other / Multiple Services' },
]

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validateForm = (formData: FormData): boolean => {
    const newErrors: FormErrors = {}
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    if (!name?.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!email?.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!message?.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    // Honeypot check
    if (formData.get('botcheck')) {
      setIsSuccess(true)
      return
    }

    if (!validateForm(formData)) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Using Web3Forms - free, no signup required
      // Get your access key at https://web3forms.com (free)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        form.reset()
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
    } catch {
      setSubmitError('There was an error sending your message. Please try calling us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-10">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
          <CheckIcon className="w-10 h-10" />
        </div>
        <h3 className="font-display text-xl font-medium text-forest-900 mb-3">
          Message Sent Successfully
        </h3>
        <p className="text-charcoal-600 mb-8">
          Thank you for your enquiry. We&apos;ll get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="secondary"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Web3Forms Access Key - Get yours free at https://web3forms.com */}
      <input
        type="hidden"
        name="access_key"
        value="ad7eef29-c10c-4429-a104-a5d45fd2f766"
      />

      {/* Form name for identification */}
      <input type="hidden" name="subject" value="New Contact Form Submission - EEC Website" />
      <input type="hidden" name="from_name" value="EEC Website Contact Form" />

      {/* Honeypot spam protection */}
      <input type="checkbox" name="botcheck" className="hidden" />

      <div>
        <Label htmlFor="name" required>
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          error={errors.name}
          placeholder="Your name"
          autoComplete="name"
          onChange={() => errors.name && setErrors(prev => ({ ...prev, name: undefined }))}
        />
      </div>

      <div>
        <Label htmlFor="email" required>
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          error={errors.email}
          placeholder="your@email.com"
          autoComplete="email"
          onChange={() => errors.email && setErrors(prev => ({ ...prev, email: undefined }))}
        />
      </div>

      <div>
        <Label htmlFor="phone">
          Phone (optional)
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="087 123 4567"
          autoComplete="tel"
        />
      </div>

      <div>
        <Label htmlFor="service" required>
          Service Required
        </Label>
        <Select
          id="service"
          name="service"
          defaultValue="EU Taxonomy Report"
        >
          {services.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label htmlFor="message" required>
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          error={errors.message}
          placeholder="Tell us about your project and requirements..."
          rows={4}
          onChange={() => errors.message && setErrors(prev => ({ ...prev, message: undefined }))}
        />
      </div>

      {submitError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 flex items-start gap-3">
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          {submitError}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
        icon={!isSubmitting ? <ArrowRightIcon className="w-5 h-5" /> : undefined}
        iconPosition="right"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-charcoal-500 text-center">
        By submitting this form, you agree to be contacted regarding your enquiry.
      </p>
    </form>
  )
}
