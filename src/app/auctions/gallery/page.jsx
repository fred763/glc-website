// src/app/auctions/gallery/page.jsx
import Hero from '@/components/shared/Hero';
import PastAuctionsGalleryGrid from '@/components/auctions/PastAuctionsGalleryGrid';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export const metadata = {
  title: 'Past Auctions Gallery | Global Liquidation Company',
  description: 'Browse our collection of items from past auctions and liquidation events featuring antiques, art, rugs, and more.',
};

export default function AuctionsGalleryPage() {
  return (
    <main>
      <Hero
        title="Auctions Gallery"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <PastAuctionsGalleryGrid />

      <DiscoverBanner
        text="Join Our Next Auction Event"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}