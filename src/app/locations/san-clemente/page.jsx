// src/app/locations/san-clemente/page.jsx
import Hero from '@/components/shared/Hero';
import LocationContent from '@/components/location/LocationContent';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function SanClementeLocationPage() {
  return (
    <main>
      <Hero
        title="SAN CLEMENTE - GLC RUG OUTLET"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <LocationContent
  title="San Clemente Location"
  virtualTourUrl="https://www.google.com/maps/embed?pb=!4v1683241789858!6m8!1m7!1sCAoSLEFGMVFpcFByUlBnSkVHcmZ4eWtoenRzZWk2UDlObTU3dlc4RVdzUGtYWWVR!2m2!1d33.435865325594!2d-117.61917362337!3f172.2!4f-7.760000000000005!5f0.4629694304036984"
  mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5180840965913!2d-117.62174772367842!3d33.43580637339537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf55637077543%3A0xa4c1d6a26e79e6ea!2sGlobal%20Liquidation%20Company!5e0!3m2!1sen!2sin!4v1741955884701!5m2!1sen!2sin"
  address=" 43 Via Pico Plaza, 
                San Clemente, CA 92672"
  phone="949-364-6425"
/>

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}
