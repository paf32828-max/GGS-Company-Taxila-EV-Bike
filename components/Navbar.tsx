'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import {
  BUSINESS_INFO,
  DEFAULT_WHATSAPP_MESSAGE,
  buildWhatsAppUrl,
} from '@/data/dealership';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Our Bikes', href: '/#bikes' },
  { label: 'Brands', href: '/#brands' },
  { label: 'Why Choose Us', href: '/#why-choose-us' },
  { label: 'Customer Reviews', href: '/#reviews' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileOpen = openForPath === pathname;
  const whatsappUrl = buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenForPath(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-14 lg:h-[72px] flex items-center justify-between gap-4 xl:gap-8">
        {/* Zone 1: Single clean text element wordmark */}
        <Link
          href="/"
          className="font-display text-lg lg:text-xl font-bold tracking-tight text-[#0F172A] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] rounded-md px-1"
        >
          {BUSINESS_INFO.shortName}
        </Link>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13.5px] font-medium text-slate-600"
        >
          {NAV_LINKS.map((item) => {
            const isActive =
              item.href === '/contact'
                ? pathname === '/contact'
                : item.href === '/' && pathname === '/';
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors duration-150 border-b-2 ${
                  isActive
                    ? 'text-[#0F172A] font-semibold border-[#0284C7]'
                    : 'border-transparent hover:text-[#0F172A] hover:border-slate-300'
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] rounded-sm`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Single prominent primary action + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Contact on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() =>
              setOpenForPath((prev) => (prev === pathname ? null : pathname))
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-700 hover:text-[#0F172A] hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7]"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-menu"
          className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 shadow-lg"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpenForPath(null)}
                className="px-3 py-3 text-sm font-medium text-slate-700 hover:text-[#0F172A] hover:bg-slate-100 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Contact on WhatsApp</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center w-full py-3 px-4 text-sm font-semibold text-[#0F172A] border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors tabular-nums"
              >
                Call {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
