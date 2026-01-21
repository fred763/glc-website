// src/app/rugs/gallery/page.jsx
import Hero from '@/components/shared/Hero';
import RugGalleryGrid from '@/components/rugs/RugGalleryGrid';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function RugGalleryPage() {
  return (
    <main>
      <Hero
        title="Gallery"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <RugGalleryGrid />

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}
