import type { StaticImageData } from 'next/image';

import heroEvShowroom from '@/src/assets/images/hero_ev_showroom_1794591059135.jpg';
import ctaEvMotorcycle from '@/src/assets/images/cta_ev_motorcycle_1794591059491.jpg';
import bikeEvonScooter from '@/src/assets/images/bike_evon_scooter_1794591059917.jpg';
import bikeZongfaMoto from '@/src/assets/images/bike_zongfa_moto_1794591061744.jpg';
import bikeOneUrban from '@/src/assets/images/bike_one_urban_1794591061333.jpg';
import showroomAboutInterior from '@/src/assets/images/showroom_about_interior_1794591061199.jpg';

export const MEDIA_ASSETS = {
  heroShowroom: heroEvShowroom,
  ctaMotorcycle: ctaEvMotorcycle,
  showroomInterior: showroomAboutInterior,
  evonScooter: bikeEvonScooter,
  zongfaMoto: bikeZongfaMoto,
  oneUrban: bikeOneUrban,
};

/**
 * Editable Business Configuration
 * Update any field below once verified or updated by the dealership owner.
 */
export const BUSINESS_INFO = {
  name: 'GGS Company Taxila EV Bike',
  shortName: 'GGS Company',
  category: 'Electric Motorcycle Dealer',
  address:
    'Royal Center Plaza, Opposite Sabzi Mandi, Barrier 2, Main GT Road, Wah Cantt, Taxila, 47080, Pakistan.',
  shortAddress: 'Royal Center Plaza, Barrier 2, Main GT Road, Wah Cantt, Taxila',
  phoneDisplay: '+92 345 3113713',
  phoneRaw: '+923453113713',
  whatsappNumber: '923453113713',
  whatsappBaseUrl: 'https://wa.me/923453113713',
  hours: 'Open 24 hours',
  hoursNote: 'As listed on Google Maps',
  googleRating: 5.0,
  googleReviewCount: 4,
  /**
   * Paste the official Google Review page URL once available.
   * Falls back to Google Maps business location search if left blank.
   */
  googleReviewsUrl: '',
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Royal+Center+Plaza,+Opposite+Sabzi+Mandi,+Barrier+2,+Main+GT+Road,+Wah+Cantt,+Taxila,+47080,+Pakistan',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Royal+Center+Plaza,+Barrier+2,+Main+GT+Road,+Wah+Cantt,+Taxila,+47080,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed',
  /**
   * Paste the official Facebook page URL once supplied by the business.
   */
  facebookUrl: '',
  services: [
    'In-store electric bike and scooter purchases',
    'Delivery service',
    'Customer assistance in selecting suitable electric bikes and scooters',
    'After-sales customer support',
  ],
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello GGS Company! I am interested in your electric bikes and scooters. Could you please share the available models, prices and specifications?';

export interface EvBrand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logoUrl?: string; // Editable logo path when official brand logo is supplied
}

/**
 * Editable Brand Listings
 * Only brands explicitly mentioned by GGS Company are included.
 */
export const EV_BRANDS: EvBrand[] = [
  {
    id: 'evon',
    name: 'EVON',
    tagline: 'Electric Bikes & Scooters',
    description:
      'Explore available EVON electric mobility options at our Wah Cantt showroom with guidance from our team.',
  },
  {
    id: 'zongfa',
    name: 'Zongfa',
    tagline: 'Electric Two-Wheelers',
    description:
      'Discover Zongfa electric motorcycles and scooters suited for daily commuting across Taxila and Wah Cantt.',
  },
  {
    id: 'one',
    name: 'ONE',
    tagline: 'Modern Urban EV Mobility',
    description:
      'View ONE electric scooter and motorcycle offerings available for in-store inspection and delivery.',
  },
];

export type VehicleCategory = 'Electric Scooter' | 'Electric Motorcycle';

export interface VehicleSpec {
  label: string;
  value: string;
}

export interface ShowcaseVehicle {
  id: string;
  name: string;
  brand: string;
  category: VehicleCategory;
  isDemoEntry: boolean;
  shortDescription: string;
  price: string | null; // Keep null until supplied by the business owner
  specs: VehicleSpec[]; // Populate only with verified specifications
  image: StaticImageData;
  imageAlt: string;
}

/**
 * Editable Vehicle Catalog
 * Demonstration showroom slots — update names, verified specifications,
 * prices, and photos once confirmed with the business owner.
 */
export const SHOWCASE_VEHICLES: ShowcaseVehicle[] = [
  {
    id: 'evon-commuter-scooter',
    name: 'EVON Electric Scooter',
    brand: 'EVON',
    category: 'Electric Scooter',
    isDemoEntry: true,
    shortDescription:
      'Demonstration catalog listing for EVON electric scooters. Contact our Taxila showroom for currently available variants, pricing, and verified specifications.',
    price: null,
    specs: [],
    image: showroomAboutInterior,
    imageAlt: 'EVON electric scooter showroom showcase at GGS Company Taxila',
  },
  {
    id: 'zongfa-electric-motorcycle',
    name: 'Zongfa Electric Motorcycle',
    brand: 'Zongfa',
    category: 'Electric Motorcycle',
    isDemoEntry: true,
    shortDescription:
      'Demonstration catalog listing for Zongfa electric motorcycles. Message us on WhatsApp to confirm in-stock models, pricing, and delivery options.',
    price: null,
    specs: [],
    image: bikeZongfaMoto,
    imageAlt: 'Zongfa electric motorcycle demonstration showcase',
  },
  {
    id: 'one-urban-scooter',
    name: 'ONE Electric Scooter',
    brand: 'ONE',
    category: 'Electric Scooter',
    isDemoEntry: true,
    shortDescription:
      'Demonstration catalog listing for ONE electric scooters. Speak with our staff for personalized vehicle selection and current availability.',
    price: null,
    specs: [],
    image: bikeOneUrban,
    imageAlt: 'ONE electric urban scooter demonstration showcase',
  },
  {
    id: 'evon-electric-motorcycle',
    name: 'EVON Electric Bike',
    brand: 'EVON',
    category: 'Electric Motorcycle',
    isDemoEntry: true,
    shortDescription:
      'Demonstration catalog listing for EVON electric motorcycles. Inquire directly for model availability, in-store pickup, or doorstep delivery.',
    price: null,
    specs: [],
    image: ctaEvMotorcycle,
    imageAlt: 'EVON electric motorcycle demonstration showcase',
  },
  {
    id: 'zongfa-city-scooter',
    name: 'Zongfa Commuter Scooter',
    brand: 'Zongfa',
    category: 'Electric Scooter',
    isDemoEntry: true,
    shortDescription:
      'Demonstration catalog listing for Zongfa commuter scooters. Contact GGS Company Taxila for verified specifications and showroom pricing.',
    price: null,
    specs: [],
    image: bikeEvonScooter,
    imageAlt: 'Zongfa electric commuter scooter demonstration showcase',
  },
  {
    id: 'one-electric-motorcycle',
    name: 'ONE Electric Motorcycle',
    brand: 'ONE',
    category: 'Electric Motorcycle',
    isDemoEntry: true,
    shortDescription:
      'Demonstration catalog listing for ONE electric motorcycles. Visit our Main GT Road showroom or request full details on WhatsApp.',
    price: null,
    specs: [],
    image: heroEvShowroom,
    imageAlt: 'ONE electric motorcycle showroom showcase',
  },
];

export interface CustomerReviewHighlight {
  id: string;
  quote: string;
  sourceLabel: string;
}

/**
 * Genuine Google Review Highlights supplied by the business.
 * Do not add fabricated reviews or invented reviewer identities.
 */
export const CUSTOMER_REVIEWS: CustomerReviewHighlight[] = [
  {
    id: 'review-1',
    quote:
      'Friendly and professional staff who help customers select their desired scooter and motorcycle.',
    sourceLabel: 'Google Review Highlight',
  },
  {
    id: 'review-2',
    quote: 'Professional dealing, quality products and helpful staff.',
    sourceLabel: 'Google Review Highlight',
  },
  {
    id: 'review-3',
    quote: 'A very good experience with helpful after-sales support.',
    sourceLabel: 'Google Review Highlight',
  },
];
