'use client'

import { PhoneIcon } from '@/components/ui/Icons'
import { PHONE_URL } from '@/lib/constants'

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      {/* Gradient fade effect */}
      <div className="absolute bottom-full left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div
        className="bg-white border-t border-gray-200"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        {/* Call Button */}
        <a
          href={PHONE_URL}
          className="flex items-center justify-center gap-3 py-4 px-4 text-gray-900 font-medium active:bg-gray-100"
          style={{ WebkitTapHighlightColor: 'transparent', minHeight: '56px' }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-900 text-white flex-shrink-0">
            <PhoneIcon className="w-5 h-5" />
          </div>
          <span className="text-sm font-semibold">Call Now</span>
        </a>
      </div>
    </div>
  )
}
