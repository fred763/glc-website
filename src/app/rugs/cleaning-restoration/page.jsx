// src/app/rugs/cleaning-restoration/page.jsx
import Hero from '@/components/shared/Hero';
import CleaningInfo from '@/components/rugs/CleaningInfo';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function RugCleaningPage() {
  return (
    <main>
      <Hero
        title="Rug Cleaning & Restoration in Pasadena & San Clemente, CA"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <CleaningInfo />

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}
