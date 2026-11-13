import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  EV_BRANDS,
  DEFAULT_WHATSAPP_MESSAGE,
  buildWhatsAppUrl,
} from '@/data/dealership';

export default function Footer() {
  const whatsappUrl = buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <footer className="bg-[#090E1A] text-slate-300 border-t border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Business Overview */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-block font-display text-xl font-bold tracking-tight text-white"
            >
              {BUSINESS_INFO.name}
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Electric motorcycle and scooter dealership in Wah Cantt, Taxila,
              Pakistan. Offering EVON, Zongfa, and ONE electric mobility
              options with personalized guidance, delivery, and after-sales
              customer support.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-semibold transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
              {BUSINESS_INFO.facebookUrl ? (
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white text-xs font-medium transition-colors whitespace-nowrap"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              ) : (
                <span className="inline-flex items-center px-3 py-2 rounded-lg border border-slate-800 text-slate-400 text-xs">
                  Facebook Page: Official Link Pending
                </span>
              )}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-display text-sm font-semibold text-white tracking-wide">
              Quick Navigation
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#bikes"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Our Electric Bikes
                </Link>
              </li>
              <li>
                <Link
                  href="/#brands"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Available Brands
                </Link>
              </li>
              <li>
                <Link
                  href="/#why-choose-us"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#reviews"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Available EV Brands */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-sm font-semibold text-white tracking-wide">
              Available Brands
            </h2>
            <ul className="space-y-2.5 text-sm">
              {EV_BRANDS.map((brand) => (
                <li key={brand.id}>
                  <Link
                    href="/#bikes"
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 text-xs text-slate-500">
              In-Store Pickup · Delivery Service
            </div>
          </div>

          {/* Showroom Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-display text-sm font-semibold text-white tracking-wide">
              Showroom Location
            </h2>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="w-4 h-4 text-sky-400 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  className="w-4 h-4 text-sky-400 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-slate-200 hover:text-white font-medium tabular-nums transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock
                  className="w-4 h-4 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  {BUSINESS_INFO.hours} ({BUSINESS_INFO.hoursNote})
                </span>
              </li>
            </ul>
            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 GGS Company Taxila EV Bike. All Rights Reserved.</p>
          <p>
            Electric Bikes in Taxila · Electric Bikes in Wah Cantt Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
