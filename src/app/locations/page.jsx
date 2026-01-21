// src/app/showroom-locations/page.jsx
import Hero from '@/components/shared/Hero';
import LocationsIntro from '@/components/locations/LocationsIntro';
import PasadenaLocation from '@/components/locations/PasadenaLocation';
import SanClementeLocation from '@/components/locations/SanClementeLocation';
import ShowroomInfo from '@/components/locations/ShowroomInfo';
import VirtualTour from '@/components/locations/VirtualTour';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function ShowroomLocationsPage() {
  return (
    <main>
      <Hero
        title="Showroom Locations"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <LocationsIntro />
      <PasadenaLocation />
      <SanClementeLocation />
      <ShowroomInfo />
      <VirtualTour />
      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}