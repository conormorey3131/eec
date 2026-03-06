'use client'

import { PhoneIcon, WhatsAppIcon } from '@/components/ui/Icons'
import { PHONE_URL, WHATSAPP_URL } from '@/lib/constants'

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      {/* Gradient fade effect */}
      <div className="absolute bottom-full left-0 right-0 h-8 bg-gradient-to-t from-ivory-100 to-transparent pointer-events-none" />

      <div className="bg-ivory-100/95 backdrop-blur-xl border-t border-charcoal-100/50 safe-area-inset-bottom">
        <div className="grid grid-cols-2 divide-x divide-charcoal-100">
          <a
            href={PHONE_URL}
            className="group flex items-center justify-center gap-3 py-4 text-forest-900 font-medium transition-colors hover:bg-forest-900/5 active:bg-forest-900/10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-900 text-ivory-100 group-hover:bg-copper-600 transition-colors">
              <PhoneIcon className="w-5 h-5" />
            </div>
            <span className="text-sm">Call Now</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 py-4 text-forest-900 font-medium transition-colors hover:bg-forest-900/5 active:bg-forest-900/10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white group-hover:bg-emerald-700 transition-colors">
              <WhatsAppIcon className="w-5 h-5" />
            </div>
            <span className="text-sm">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
