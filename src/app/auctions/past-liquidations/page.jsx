// src/app/auctions/past-liquidations/page.jsx
import Hero from '@/components/shared/Hero';
import PastAuctionsGalleryGrid from '@/components/auctions/PastAuctionsGalleryGrid';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export const metadata = {
  title: 'Past Liquidations | Global Liquidation Company',
  description: 'Explore our past liquidation events featuring high-quality antiques, fine art, and rare rugs at exceptional values.',
};

export default function PastLiquidationsPage() {
  return (
    <main>
      <Hero
        title="Past Liquidations"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      <p className='my-16'>coming soon</p>
      {/* For now, reusing the same gallery component */}
      {/* <PastAuctionsGalleryGrid /> */}

      <DiscoverBanner
        text="Don't Miss Our Next Liquidation Event"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}