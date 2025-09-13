'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full border-t border-[#D0CAC5] bg-[#F3EEE9]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="font-sf-pro text-sm text-[#776F69]">
            © {new Date().getFullYear()} Vexa. All rights reserved.
          </p>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="/terms" 
              className="font-sf-pro text-sm text-[#776F69] hover:text-[#612A74] transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link 
              href="/privacy" 
              className="font-sf-pro text-sm text-[#776F69] hover:text-[#612A74] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
