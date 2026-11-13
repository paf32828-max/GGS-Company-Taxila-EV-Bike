'use client';

import { motion } from 'motion/react';
import { ArrowDownRight, MessageCircle, Phone } from 'lucide-react';
import ResilientImage from '@/components/ResilientImage';
import {
  BUSINESS_INFO,
  DEFAULT_WHATSAPP_MESSAGE,
  MEDIA_ASSETS,
  buildWhatsAppUrl,
} from '@/data/dealership';

export default function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <section
      aria-label="Hero showcase"
      className="relative bg-[#0F172A] text-white overflow-hidden"
    >
      {/* Background photograph with measured midnight-steel contrast scrim */}
      <div className="absolute inset-0">
        <ResilientImage
          src={MEDIA_ASSETS.heroShowroom}
          alt="Modern electric motorcycle and electric scooter inside GGS Company Taxila EV Bike showroom"
          title="GGS Company Taxila EV Bike Showroom"
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#090E1A]/95 via-[#0F172A]/82 to-[#0F172A]/45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#090E1A] via-transparent to-[#090E1A]/40"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-6"
        >
          <p className="text-xs sm:text-sm font-medium tracking-wide text-sky-400">
            GGS Company Taxila EV Bike · Main GT Road, Wah Cantt, Taxila
          </p>

          <h1
            className="font-display font-bold tracking-tight text-white text-balance leading-[1.08]"
            style={{ fontSize: 'clamp(2.25rem, 4.3vw, 3.75rem)' }}
          >
            Power Your Future with Smart Electric Mobility.
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
            Discover quality electric bikes and scooters at GGS Company Taxila.
            Explore modern electric mobility solutions with professional
            guidance, convenient delivery and dedicated customer support.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <a
              href="#bikes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span>Explore Our Bikes</span>
              <ArrowDownRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-white/25 bg-[#090E1A]/60 hover:bg-white/10 text-white text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <Phone className="w-4 h-4 text-sky-400 shrink-0" aria-hidden="true" />
              <span>Call Now</span>
            </a>
          </div>
        </motion.div>

        {/* Full-width Showroom Summary Strip below Hero Split */}
        <div className="mt-14 lg:mt-16 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <p className="text-xs font-medium text-slate-400">Showroom Location</p>
            <p className="mt-1 text-sm font-semibold text-white">
              Royal Center Plaza, Barrier 2, Wah Cantt
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400">Available Brands</p>
            <p className="mt-1 text-sm font-semibold text-white">
              EVON · Zongfa · ONE
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400">Google Rating</p>
            <p className="mt-1 text-sm font-semibold text-white tabular-nums">
              {BUSINESS_INFO.googleRating.toFixed(1)} / 5 ({BUSINESS_INFO.googleReviewCount} Google Reviews)
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400">Showroom Hours</p>
            <p className="mt-1 text-sm font-semibold text-sky-400">
              {BUSINESS_INFO.hours}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
