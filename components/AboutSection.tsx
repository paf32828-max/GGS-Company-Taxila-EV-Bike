import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import ResilientImage from '@/components/ResilientImage';
import { BUSINESS_INFO, MEDIA_ASSETS } from '@/data/dealership';

const ABOUT_HIGHLIGHTS = [
  'Professional customer dealing with clear, honest guidance',
  'Helpful product selection assistance tailored to your daily commute',
  'Quality-focused electric motorcycle and scooter offerings',
  'Convenient purchasing options including in-store pickup and delivery',
  'Dedicated after-sales customer support for ongoing peace of mind',
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#F1F5F9] text-[#0F172A] py-16 sm:py-20 lg:py-24 border-b border-slate-200"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Editorial Business Overview */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#0284C7]">
                About GGS Company Taxila
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] text-balance leading-tight">
                Your Trusted Destination for Electric Mobility
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Located at Royal Center Plaza on Main GT Road, Wah Cantt,
                Taxila, {BUSINESS_INFO.name} serves riders looking for reliable
                electric bikes in Taxila and Wah Cantt. We help customers
                explore modern electric motorcycles and EV scooters from
                available brands including EVON, Zongfa, and ONE.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Whether you are comparing your first commuter electric scooter
                or upgrading to an electric motorcycle, our helpful showroom team
                guides you through the available models so you can choose a
                vehicle that fits your everyday needs.
              </p>
            </div>

            <ul className="divide-y divide-slate-200 border-y border-slate-200">
              {ABOUT_HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="py-3 flex items-start gap-3 text-sm sm:text-[15px] font-medium text-slate-800"
                >
                  <Check
                    className="w-4 h-4 text-[#0284C7] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#bikes"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0F172A] hover:bg-slate-800 text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <span>Browse Showcase Models</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors whitespace-nowrap"
              >
                <span>Visit Our Wah Cantt Showroom</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Balanced Architectural Showroom Image */}
          <div className="lg:col-span-6">
            <div className="relative h-72 sm:h-96 lg:h-full min-h-[360px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-900">
              <ResilientImage
                src={MEDIA_ASSETS.showroomInterior}
                alt="EV scooters and electric motorcycles displayed inside the showroom"
                title="GGS Company Taxila EV Showroom"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
