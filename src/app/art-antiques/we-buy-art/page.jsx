import Hero from '@/components/shared/Hero';
import BuyArtInfo from '@/components/art-antiques/BuyArtInfo';
import ArtContactForm from '@/components/art-antiques/ArtContactForm';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function BuyArtPage() {
  return (
    <main>
      <Hero
        title="We Buy Art in Pasadena & San Clemente, CA"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <BuyArtInfo />
      
      <ArtContactForm />

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}