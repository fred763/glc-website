// src/app/page.jsx
import HeroCarousel from '@/components/home/HeroCarousel';
import ServiceCategories from '@/components/home/ServiceCategories';
import PrivateCollection from '@/components/home/PrivateCollection';
import HeirloomRugs from '@/components/home/HeirloomRugs';
import DiscoverItems from '@/components/home/DiscoverItems';
import DiscoverBanner from '@/components/shared/DiscoverBanner';
import Testimonials from '@/components/home/Testimonials';
import Locations from '@/components/shared/Locations';

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <PrivateCollection />
      <ServiceCategories />
      <HeirloomRugs />
      <DiscoverItems />
      <Testimonials />
      
      <DiscoverBanner 
        text="Discover the Perfect Piece to Elevate Your Living Space or Find a Unique Treasure to Add to Your Collection"
        backgroundImage="/images/discover-bg.jpg"
      />

      <Locations />
    </main>
  );
}
