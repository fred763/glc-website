// src/app/locations/pasadena/page.jsx
import Hero from '@/components/shared/Hero';
import LocationContent from '@/components/location/LocationContent';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function PasadenaLocationPage() {
  return (
    <main>
      <Hero
        title="PASADENA - GLC ANTIQUES | RUGS | AUCTIONS & GLOBAL LIQUIDATIONS"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <LocationContent
  title="Pasadena Location"
  virtualTourUrl="https://www.google.com/maps/embed?pb=!4v1689171834016!6m8!1m7!1sCAoSLEFGMVFpcE5saTZIV3BoRU5GOWFQbFdUeTU0OW90TjlZajhEeGRxR2ZDMkxD!2m2!1d34.147711744951!2d-118.13197858294!3f201.55!4f-10.819999999999993!5f0.4000000000000002"
  mapUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13207.821091599699!2d-118.131972!3d34.1474864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c37a78abdf41%3A0xd5a1bc92057f1df3!2sGlobal%20Liquidation%20Company!5e0!3m2!1sen!2sin!4v1741955299477!5m2!1sen!2sin"
  address=" 80 N Lake Ave, 
                Pasadena, CA 91101"
  phone="626-744-0404"
/>

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}
