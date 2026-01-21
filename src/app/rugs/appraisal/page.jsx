// src/app/rugs/appraisal/page.jsx
import Hero from '@/components/shared/Hero';
import AppraisalInfo from '@/components/rugs/AppraisalInfo';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function RugAppraisalPage() {
  return (
    <main>
      <Hero
        title="Rug Appraisal in Pasadena & San Clemente, CA"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <AppraisalInfo />

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}
