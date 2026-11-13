'use client';

import { useState, useEffect } from 'react';
import {
  MessageCircle,
  Eye,
  X,
  Phone,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react';
import ResilientImage from '@/components/ResilientImage';
import {
  BUSINESS_INFO,
  EV_BRANDS,
  SHOWCASE_VEHICLES,
  buildWhatsAppUrl,
  type ShowcaseVehicle,
  type VehicleCategory,
} from '@/data/dealership';

function getProductWhatsAppMessage(vehicle: ShowcaseVehicle): string {
  return `Hello GGS Company! I am interested in the ${vehicle.name} (${vehicle.brand} · ${vehicle.category}). Could you please share the current price, availability, and verified specifications?`;
}

export default function CatalogAndBrands() {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | VehicleCategory
  >('All');
  const [activeVehicle, setActiveVehicle] = useState<ShowcaseVehicle | null>(
    null
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVehicle(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredVehicles = SHOWCASE_VEHICLES.filter((item) => {
    const brandMatch =
      selectedBrand === 'All' || item.brand === selectedBrand;
    const categoryMatch =
      selectedCategory === 'All' || item.category === selectedCategory;
    return brandMatch && categoryMatch;
  });

  const handleSelectBrandFromDirectory = (brandName: string) => {
    setSelectedBrand(brandName);
    setSelectedCategory('All');
    const bikesEl = document.getElementById('bikes');
    if (bikesEl) {
      bikesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Featured Electric Bikes & Scooters Showcase */}
      <section
        id="bikes"
        className="bg-white text-[#0F172A] py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#0284C7]">
                Electric Bikes &amp; Scooters
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] text-balance">
                Explore Our Electric Bikes &amp; Scooters
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Editable showroom showcase entries for EVON, Zongfa, and ONE
                models. Tap any model to request current pricing, stock status,
                and verified specifications directly on WhatsApp.
              </p>
            </div>

            {/* Interactive Brand & Category Filters */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <div
                role="group"
                aria-label="Filter by brand"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F1F5F9] border border-slate-200 rounded-lg"
              >
                {['All', ...EV_BRANDS.map((b) => b.name)].map((brand) => {
                  const active = selectedBrand === brand;
                  return (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => setSelectedBrand(brand)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        active
                          ? 'bg-[#0284C7] text-white shadow-xs'
                          : 'text-slate-600 hover:text-[#0F172A] hover:bg-white'
                      }`}
                    >
                      {brand === 'All' ? 'All Brands' : brand}
                    </button>
                  );
                })}
              </div>

              <div
                role="group"
                aria-label="Filter by vehicle type"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F1F5F9] border border-slate-200 rounded-lg"
              >
                {(['All', 'Electric Scooter', 'Electric Motorcycle'] as const).map(
                  (category) => {
                    const active = selectedCategory === category;
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          active
                            ? 'bg-[#0F172A] text-white shadow-xs'
                            : 'text-slate-600 hover:text-[#0F172A] hover:bg-white'
                        }`}
                      >
                        {category === 'All' ? 'All Types' : `${category}s`}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredVehicles.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-10 text-center space-y-4">
              <p className="text-base font-medium text-slate-700">
                No showcase listings match the selected filter combination.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedBrand('All');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 rounded-lg bg-[#0F172A] hover:bg-slate-800 text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredVehicles.map((vehicle) => {
                const whatsappHref = buildWhatsAppUrl(
                  getProductWhatsAppMessage(vehicle)
                );

                return (
                  <article
                    key={vehicle.id}
                    className="group flex flex-col rounded-2xl bg-[#F8FAFC] border border-slate-200 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                  >
                    {/* Product Image (4:3) */}
                    <div className="relative aspect-[4/3] w-full bg-[#0F172A] overflow-hidden">
                      <ResilientImage
                        src={vehicle.image}
                        alt={vehicle.imageAlt}
                        title={vehicle.name}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col p-6 space-y-4">
                      <div className="space-y-1.5">
                        {/* Clean unboxed metadata line */}
                        <p className="text-xs font-medium text-slate-500">
                          <span className="text-[#0284C7] font-semibold">
                            {vehicle.brand}
                          </span>
                          <span className="mx-1.5" aria-hidden="true">
                            ·
                          </span>
                          <span>{vehicle.category}</span>
                          {vehicle.isDemoEntry && (
                            <>
                              <span className="mx-1.5" aria-hidden="true">
                                ·
                              </span>
                              <span>Showcase Demo</span>
                            </>
                          )}
                        </p>
                        <h3 className="font-display text-xl font-semibold text-[#0F172A]">
                          {vehicle.name}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed flex-1">
                        {vehicle.shortDescription}
                      </p>

                      {/* Verified Price & Specs Slot */}
                      <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-4 text-xs">
                        <div>
                          <span className="block text-slate-500">Pricing</span>
                          <span className="font-semibold text-[#0F172A] tabular-nums">
                            {vehicle.price ?? 'Contact for Latest Price'}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="block text-slate-500">
                            Specifications
                          </span>
                          <span className="font-semibold text-[#0284C7]">
                            {vehicle.specs.length > 0
                              ? `${vehicle.specs.length} Verified Specs`
                              : 'Confirmed on Inquiry'}
                          </span>
                        </div>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-semibold transition-colors whitespace-nowrap"
                        >
                          <MessageCircle
                            className="w-4 h-4 shrink-0"
                            aria-hidden="true"
                          />
                          <span>Get Price on WhatsApp</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => setActiveVehicle(vehicle)}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-[#0F172A] text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer"
                        >
                          <Eye className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span>View Details</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Available EV Brands Section (Midnight Steel contrast band) */}
      <section
        id="brands"
        className="bg-[#0F172A] text-white py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-sky-400">
              Available Brands
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Explore Our Available EV Brands
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Browse electric motorcycles and scooters across the brands offered
              at GGS Company Taxila. Brand listings can be expanded easily as
              new inventory arrives.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {EV_BRANDS.map((brand, idx) => {
              const brandWhatsApp = buildWhatsAppUrl(
                `Hello GGS Company! Could you share available ${brand.name} electric bike and scooter models and their prices?`
              );

              return (
                <div
                  key={brand.id}
                  className="flex flex-col justify-between p-7 rounded-2xl bg-[#1E293B] border border-slate-700/80 space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between gap-4 border-b border-slate-700 pb-4">
                      <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                        {brand.name}
                      </span>
                      <span className="font-mono text-xs text-sky-400 tabular-nums">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-sky-300">
                      {brand.tagline}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {brand.description}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleSelectBrandFromDirectory(brand.name)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <span>Filter {brand.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>

                    <a
                      href={brandWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors whitespace-nowrap"
                    >
                      <span>Ask on WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      {activeVehicle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="vehicle-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm"
          onClick={() => setActiveVehicle(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 text-[#0F172A] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVehicle(null)}
              aria-label="Close product details"
              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/90 hover:bg-white text-[#0F172A] border border-slate-200 shadow-sm transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-[#0F172A]">
              <ResilientImage
                src={activeVehicle.image}
                alt={activeVehicle.imageAlt}
                title={activeVehicle.name}
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover object-center"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-medium text-slate-500">
                  <span className="text-[#0284C7] font-semibold">
                    {activeVehicle.brand}
                  </span>
                  <span className="mx-1.5" aria-hidden="true">
                    ·
                  </span>
                  <span>{activeVehicle.category}</span>
                  {activeVehicle.isDemoEntry && (
                    <>
                      <span className="mx-1.5" aria-hidden="true">
                        ·
                      </span>
                      <span>Editable Showcase Listing</span>
                    </>
                  )}
                </p>
                <h3
                  id="vehicle-modal-title"
                  className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]"
                >
                  {activeVehicle.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeVehicle.shortDescription}
                </p>
              </div>

              {/* Price & Verified Specs Box */}
              <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
                  <span className="text-xs font-medium text-slate-500">
                    Showroom Price
                  </span>
                  <span className="text-base font-semibold text-[#0F172A] tabular-nums">
                    {activeVehicle.price ?? 'Available on WhatsApp / In-Store Inquiry'}
                  </span>
                </div>

                {activeVehicle.specs.length > 0 ? (
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    {activeVehicle.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between gap-2">
                        <dt className="text-slate-500">{spec.label}</dt>
                        <dd className="font-medium text-[#0F172A] tabular-nums">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <Info
                      className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Exact battery capacity, range, motor output, and warranty
                      terms are shared directly by our Wah Cantt showroom team
                      once model variant availability is confirmed.
                    </span>
                  </div>
                )}
              </div>

              {/* Purchase & Support Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-4 h-4 text-[#16A34A] shrink-0"
                    aria-hidden="true"
                  />
                  <span>In-Store Pickup at Wah Cantt, Taxila</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-4 h-4 text-[#16A34A] shrink-0"
                    aria-hidden="true"
                  />
                  <span>Delivery Service Available</span>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={buildWhatsAppUrl(getProductWhatsAppMessage(activeVehicle))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Get Price on WhatsApp</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-[#0F172A] text-sm font-semibold transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 shrink-0 text-[#0284C7]" aria-hidden="true" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
