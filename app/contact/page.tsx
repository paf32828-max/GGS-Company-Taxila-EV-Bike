import type { Metadata } from 'next';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
  Store,
  Truck,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import {
  BUSINESS_INFO,
  DEFAULT_WHATSAPP_MESSAGE,
  buildWhatsAppUrl,
} from '@/data/dealership';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact GGS Company Taxila EV Bike at Royal Center Plaza, Main GT Road, Wah Cantt, Taxila. Call +92 345 3113713 or chat on WhatsApp for electric bikes and scooters.',
};

export default function ContactPage() {
  const whatsappUrl = buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <div className="bg-[#F1F5F9] text-[#0F172A]">
      {/* Header Band */}
      <section className="bg-[#0F172A] text-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-sky-400">
              Showroom &amp; Customer Support
            </p>
            <h1
              className="font-display font-bold tracking-tight text-white text-balance leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3.25rem)' }}
            >
              Contact GGS Company Taxila EV Bike
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Visit our showroom on Main GT Road, Wah Cantt, Taxila or reach our
              team directly by phone or WhatsApp for vehicle availability,
              in-store pickup, and delivery details.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Column: Business Info + Quick Actions + Map */}
            <div className="lg:col-span-6 space-y-8">
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-6">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-[#0284C7]">
                    {BUSINESS_INFO.category}
                  </p>
                  <h2 className="font-display text-2xl font-bold text-[#0F172A]">
                    {BUSINESS_INFO.name}
                  </h2>
                </div>

                <dl className="space-y-5 text-sm">
                  <div className="flex items-start gap-3.5">
                    <MapPin
                      className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-semibold text-[#0F172A]">Address</dt>
                      <dd className="mt-1 text-slate-600 leading-relaxed">
                        {BUSINESS_INFO.address}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone
                      className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-semibold text-[#0F172A]">Phone</dt>
                      <dd className="mt-1">
                        <a
                          href={`tel:${BUSINESS_INFO.phoneRaw}`}
                          className="text-[#0F172A] hover:text-[#0284C7] font-semibold tabular-nums transition-colors"
                        >
                          {BUSINESS_INFO.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock
                      className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-semibold text-[#0F172A]">
                        Business Hours
                      </dt>
                      <dd className="mt-1 text-slate-600">
                        {BUSINESS_INFO.hours} ({BUSINESS_INFO.hoursNote})
                      </dd>
                    </div>
                  </div>
                </dl>

                {/* Services */}
                <div className="pt-5 border-t border-slate-200 space-y-3">
                  <p className="text-xs font-semibold tracking-wide text-slate-500">
                    Available Services
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <Store
                        className="w-4 h-4 text-[#0284C7] shrink-0"
                        aria-hidden="true"
                      />
                      <span>In-Store Pickup</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Truck
                        className="w-4 h-4 text-[#0284C7] shrink-0"
                        aria-hidden="true"
                      />
                      <span>Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>WhatsApp Contact</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0F172A] hover:bg-slate-800 text-white text-sm font-semibold transition-colors whitespace-nowrap tabular-nums"
                  >
                    <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-[#0F172A] text-sm font-semibold transition-colors whitespace-nowrap"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-4 h-4 text-[#0284C7] shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Google Maps Embed Card */}
              <div className="rounded-2xl overflow-hidden bg-white border border-slate-200">
                <div className="px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="font-display text-base font-semibold text-[#0F172A]">
                      Showroom Location Map
                    </h2>
                    <p className="text-xs text-slate-500">
                      Royal Center Plaza, Barrier 2, Main GT Road, Wah Cantt, Taxila
                    </p>
                  </div>
                  <a
                    href={BUSINESS_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors whitespace-nowrap"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
                <div className="aspect-[16/10] w-full bg-slate-100">
                  <iframe
                    title="GGS Company Taxila EV Bike location on Google Maps"
                    src={BUSINESS_INFO.googleMapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Customer Inquiry Form */}
            <div className="lg:col-span-6">
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-wide text-[#0284C7]">
                    Direct Showroom Inquiry
                  </p>
                  <h2 className="font-display text-2xl font-bold text-[#0F172A]">
                    Ask About Available Models &amp; Prices
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Fill in your details below to start a pre-filled WhatsApp
                    conversation with our Wah Cantt team.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
