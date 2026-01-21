// src/app/contact/page.jsx
import Hero from '@/components/shared/Hero';
import ContactForm from '@/components/contact/ContactForm';
import LocationDetails from '@/components/contact/LocationDetails';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function ContactPage() {
  return (
    <main>
      <Hero
        title="Contact Us"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <ContactForm />
      
      <LocationDetails />

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}
