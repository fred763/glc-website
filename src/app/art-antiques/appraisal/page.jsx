import Hero from '@/components/shared/Hero';
import ArtAppraisalInfo from '@/components/art-antiques/ArtAppraisalInfo';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function ArtAppraisalPage() {
  return (
    <main>
      <Hero
        title="Art Appraisal in Pasadena & San Clemente, CA"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <ArtAppraisalInfo />

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}