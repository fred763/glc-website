// src/app/about/page.jsx
import Hero from '@/components/shared/Hero';
import AboutContent from '@/components/about/AboutContent';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function AboutPage() {
  return (
    <main>
      <Hero
        title="About Us"
        backgroundImage="/images/about/AboutUs_HeroInterior.jpg"
        height="lg"
        overlay="pattern"
      />
      
      <AboutContent />

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}
