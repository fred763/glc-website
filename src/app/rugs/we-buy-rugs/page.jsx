// src/app/buy-rugs/page.jsx
import Hero from '@/components/shared/Hero';
import BuyRugsInfo from '@/components/rugs/BuyRugsInfo';
import RugContactForm from '@/components/rugs/RugContactForm';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function BuyRugsPage() {
  return (
    <main>
      <Hero
        title="We Buy Rugs in Pasadena & San Clemente, CA"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <BuyRugsInfo />
      
      <RugContactForm />

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}
