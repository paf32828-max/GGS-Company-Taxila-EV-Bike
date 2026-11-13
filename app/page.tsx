import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CatalogAndBrands from '@/components/CatalogAndBrands';
import WhyChooseSection from '@/components/WhyChooseSection';
import ReviewsSection from '@/components/ReviewsSection';
import CtaSection from '@/components/CtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CatalogAndBrands />
      <WhyChooseSection />
      <ReviewsSection />
      <CtaSection />
    </>
  );
}
