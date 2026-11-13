import Link from 'next/link';
import { ArrowLeft, MessageCircle, Phone } from 'lucide-react';
import {
  BUSINESS_INFO,
  DEFAULT_WHATSAPP_MESSAGE,
  buildWhatsAppUrl,
} from '@/data/dealership';

export default function NotFound() {
  const whatsappUrl = buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <section className="bg-[#F8FAFC] text-[#0F172A] py-24 sm:py-32">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 text-center space-y-6">
        <p className="font-mono text-sm font-semibold text-[#0284C7] tabular-nums">
          404 · Page Not Found
        </p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A] text-balance">
          We Could Not Find That Page
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          The page you requested may have moved or is unavailable. Return to
          our showroom homepage or contact GGS Company Taxila EV Bike directly.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0F172A] text-white hover:bg-slate-800 text-sm font-semibold transition-colors whitespace-nowrap"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Back to Homepage</span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-[#0F172A] text-sm font-semibold transition-colors whitespace-nowrap tabular-nums"
          >
            <Phone className="w-4 h-4 text-[#0284C7] shrink-0" aria-hidden="true" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
