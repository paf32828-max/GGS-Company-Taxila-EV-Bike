'use client';

import { MessageCircle } from 'lucide-react';
import { DEFAULT_WHATSAPP_MESSAGE, buildWhatsAppUrl } from '@/data/dealership';

export default function FloatingWhatsApp() {
  const whatsappUrl = buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with GGS Company Taxila EV Bike"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center justify-center gap-2.5 h-11 w-11 sm:h-12 sm:w-auto sm:px-5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white shadow-lg shadow-slate-900/25 border border-emerald-400/40 transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
        WhatsApp Us
      </span>
    </a>
  );
}
