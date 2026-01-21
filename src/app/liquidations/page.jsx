// src/app/liquidations/page.jsx
import Hero from '@/components/shared/Hero';
import AuthorizedResellers from '@/components/liquidations/AuthorizedResellers';
import RareCollectibles from '@/components/liquidations/RareCollectibles';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function LiquidationsPage() {
  return (
    <main>
      <Hero
        title="Fine Art, Antiques & Exquised Rugs Liquidations in Pasadena & San Clemente, CA"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <AuthorizedResellers />
      <RareCollectibles />
      
      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}