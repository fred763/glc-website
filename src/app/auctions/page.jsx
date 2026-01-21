// src/app/auctions/page.jsx
import Hero from '@/components/shared/Hero';
import Hero2 from '@/components/shared/Hero2';
import DiscoverBanner from '@/components/shared/DiscoverBanner';
import AuctionExpectations from '@/components/auctions/AuctionExpectations';
import RareItemsSection from '@/components/auctions/RareItemsSection';

export default function AuctionsPage() {
  return (
    <main>
      <Hero
        title="Auctions"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />

      <Hero2
        title="Unveiling treasures: live antique, art, and artifacts auctions by Global Liquidation Company"
        description="Experience the thrill of bidding on exquisite, one-of-a-kind items at our prestigious Pasadena, CA showrooms. Discover rare and authentic collectibles sourced from respected collectors worldwide. From valuable liquidated collections, explore a curated selection of unique decorative pieces, art, furniture, and fine rugs. Join collectors and homeowners alike in securing these irreplaceable gems. Book your spot now at our San Clemente and Pasadena locations."
        ctaText="CONTACT US"
        ctaLink="/contact"
      />

      <AuctionExpectations />
      
      <RareItemsSection />

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}
