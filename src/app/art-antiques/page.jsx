// src/app/art-antiques/page.jsx
import Hero from '@/components/shared/Hero';
import ArtAntiquesContent from '@/components/art-antiques/ArtAntiquesContent';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function ArtAntiquesPage() {
  return (
    <main>
      <Hero
        title="Art and Antiques in Pasadena & San Clemente, CA"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <ArtAntiquesContent />

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}
