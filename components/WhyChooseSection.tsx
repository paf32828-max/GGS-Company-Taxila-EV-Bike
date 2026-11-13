import {
  Users,
  ShieldCheck,
  Zap,
  Store,
  Truck,
  Headphones,
} from 'lucide-react';

const REASONS = [
  {
    title: 'Helpful & Professional Staff',
    description:
      'Speak with attentive showroom representatives who listen to your daily commute needs and explain your vehicle options clearly.',
    icon: Users,
  },
  {
    title: 'Quality Product Options',
    description:
      'Explore electric motorcycles and scooters selected for dependable everyday riding across Taxila and Wah Cantt.',
    icon: ShieldCheck,
  },
  {
    title: 'Electric Mobility Solutions',
    description:
      'Discover modern battery-powered two-wheelers designed for quiet, practical, and efficient local travel.',
    icon: Zap,
  },
  {
    title: 'In-Store Pickup',
    description:
      'Visit Royal Center Plaza on Main GT Road to inspect available vehicles in person and complete your purchase directly.',
    icon: Store,
  },
  {
    title: 'Delivery Available',
    description:
      'Arrange convenient delivery service for your chosen electric bike or scooter once your order is confirmed with our team.',
    icon: Truck,
  },
  {
    title: 'After-Sales Customer Support',
    description:
      'Rely on responsive post-purchase assistance from our team whenever you need guidance or support after your purchase.',
    icon: Headphones,
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#F1F5F9] text-[#0F172A] py-16 sm:py-20 lg:py-24 border-b border-slate-200"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#0284C7]">
            Why Choose GGS Company
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] text-balance">
            Built Around Clear Guidance &amp; Reliable Support
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From selecting the right EV scooter or motorcycle to delivery and
            after-sales support, we focus on making your transition to electric
            mobility straightforward.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="p-7 rounded-2xl bg-white border border-slate-200 space-y-4 transition-colors duration-150 hover:border-sky-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0F172A] text-sky-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#0F172A]">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
