import { MessageCircle, Phone, MapPin } from 'lucide-react';
import ResilientImage from '@/components/ResilientImage';
import {
  BUSINESS_INFO,
  DEFAULT_WHATSAPP_MESSAGE,
  MEDIA_ASSETS,
  buildWhatsAppUrl,
} from '@/data/dealership';

export default function CtaSection() {
  const whatsappUrl = buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <section
      aria-label="Contact call to action"
      className="relative bg-[#0F172A] text-white py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0">
        <ResilientImage
          src={MEDIA_ASSETS.ctaMotorcycle}
          alt="Electric motorcycle parked outdoors at twilight"
          title="GGS Company Taxila Electric Mobility"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#090E1A]/95 via-[#0F172A]/84 to-[#0F172A]/60"
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-sky-400">
            Visit or Contact GGS Company Taxila
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
            Ready to Switch to Electric Mobility?
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Find an electric bike that suits your needs. Contact GGS Company
            Taxila today for product details, availability and purchasing
            assistance.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Call Our Team</span>
            </a>

            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-white/25 bg-[#090E1A]/50 hover:bg-white/10 text-white text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
