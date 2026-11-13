import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { BUSINESS_INFO } from '@/data/dealership';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = process.env.APP_URL || 'https://ggstaxilaev.com';

export const metadata: Metadata = {
  title: {
    default: 'GGS Company Taxila EV Bike | Electric Bikes in Taxila & Wah Cantt',
    template: '%s | GGS Company Taxila EV Bike',
  },
  description:
    'GGS Company Taxila EV Bike is an electric motorcycle dealer in Wah Cantt, Taxila, Pakistan. Explore EVON, Zongfa, and ONE electric bikes and scooters with 24-hour support.',
  keywords: [
    'Electric Bikes in Taxila',
    'Electric Bikes in Wah Cantt',
    'EV Scooters in Taxila',
    'Electric Motorcycle Dealer in Taxila',
    'Electric Bikes in Wah Cantt Pakistan',
    'GGS Company Taxila',
    'EVON electric scooter Taxila',
    'Zongfa electric bike Wah Cantt',
    'ONE electric scooter Pakistan',
  ],
  openGraph: {
    title: 'GGS Company Taxila EV Bike | Electric Bikes in Taxila & Wah Cantt',
    description:
      'Explore EVON, Zongfa, and ONE electric motorcycles and scooters at GGS Company Taxila. Visit Royal Center Plaza, Main GT Road, Wah Cantt or chat on WhatsApp.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'GGS Company Taxila EV Bike',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GGS Company Taxila EV Bike | Electric Bikes in Taxila & Wah Cantt',
    description:
      'Electric motorcycle and EV scooter dealership on Main GT Road, Wah Cantt, Taxila. Open 24 hours with delivery and after-sales support.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MotorcycleDealer',
  name: BUSINESS_INFO.name,
  description:
    'Electric motorcycle and scooter dealership in Wah Cantt, Taxila offering EVON, Zongfa, and ONE electric vehicles with in-store pickup, delivery, and after-sales customer support.',
  telephone: BUSINESS_INFO.phoneRaw,
  url: siteUrl,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Royal Center Plaza, Opposite Sabzi Mandi, Barrier 2, Main GT Road',
    addressLocality: 'Wah Cantt, Taxila',
    postalCode: '47080',
    addressCountry: 'PK',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: String(BUSINESS_INFO.googleRating),
    reviewCount: String(BUSINESS_INFO.googleReviewCount),
    bestRating: '5',
    worstRating: '1',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-white text-[#0F172A] selection:bg-sky-500/20 selection:text-sky-900"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
