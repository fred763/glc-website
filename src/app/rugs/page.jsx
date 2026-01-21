// src/app/rugs/page.jsx
import Hero from '@/components/shared/Hero';
import Hero2 from '@/components/shared/Hero2';
import DiscoverBanner from '@/components/shared/DiscoverBanner';
import RugFeature from '@/components/rugs/RugFeature';
import RugGallery from '@/components/rugs/RugGallery';
import RugVideos from '@/components/rugs/RugVideos';

export default function RugsPage() {
  return (
    <main>
      <Hero
        title="Largest collection of Rugs in Pasadena & San Clemente, CA"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />

      <Hero2
        title="Welcome to Southern California&apos;s Premier Destination for Exquisite & Exceptional Rugs"
        description="With our extensive expertise and global exploration, we take pride in offering you a curated collection of antique, Oriental, Persian, hand-knotted, wool, and silk rugs. Each rug we present is a testament to our commitment to provide you with the finest quality and unparalleled craftsmanship."
        ctaText="CONTACT US"
        ctaLink="/contact"
      />

      <RugFeature />
      
      <RugGallery />
      
      <RugVideos />

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}
