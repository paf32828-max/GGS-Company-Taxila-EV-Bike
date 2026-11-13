import { Star, Quote, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, CUSTOMER_REVIEWS } from '@/data/dealership';

export default function ReviewsSection() {
  const reviewsLink =
    BUSINESS_INFO.googleReviewsUrl || BUSINESS_INFO.googleMapsDirectionsUrl;

  return (
    <section
      id="reviews"
      className="bg-white text-[#0F172A] py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#0284C7]">
              Customer Feedback
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] text-balance">
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Verified review highlights shared by customers who visited GGS
              Company Taxila EV Bike in Wah Cantt.
            </p>
          </div>

          {/* Prominent Google Rating Block */}
          <div className="p-5 rounded-2xl bg-[#0F172A] text-white border border-slate-800 flex items-center gap-4 shrink-0">
            <div>
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-1.5 font-display text-lg font-bold text-white tabular-nums">
                {BUSINESS_INFO.googleRating.toFixed(1)} / 5 –{' '}
                {BUSINESS_INFO.googleReviewCount} Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Genuine Supplied Review Highlights */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CUSTOMER_REVIEWS.map((review) => (
            <blockquote
              key={review.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-6"
            >
              <div className="space-y-4">
                <Quote
                  className="w-6 h-6 text-[#0284C7]"
                  aria-hidden="true"
                />
                <p className="text-base text-slate-700 leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              <footer className="pt-4 border-t border-slate-200 text-xs font-medium text-slate-500">
                {review.sourceLabel}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <a
            href={reviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-[#0F172A] text-sm font-semibold transition-colors whitespace-nowrap"
          >
            <span>Read Customer Reviews</span>
            <ExternalLink className="w-4 h-4 text-[#0284C7]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
