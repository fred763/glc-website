// src/app/liquidations/estate-items/page.jsx

import Hero from '@/components/shared/Hero';
import Locations from '@/components/shared/Locations';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function LiquidateEstatePage() {
  return (
    <main>
      <Hero
        title="Liquidate Your Estate Items in Pasadena & San Clemente, CA"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />

      <Locations 
        title="Visit Our Locations to Discuss Your Estate Items"
        className="mt-8"
      />

      <DiscoverBanner
        text="Trust Our Expert Team to Help You Get the Best Value for Your Estate Items"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-8"
      />
    </main>
  );
}
