// src/components/locations/SanClementeLocation.jsx
import Image from 'next/image';

export default function SanClementeLocation() {
  return (
    <section className="py-16 bg-background-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-playfair">
              San Clemente Location: Home to the GLC Rug Outlet
            </h2>
            <p className="font-dosis">
              Step into a space where craftsmanship meets affordability, nestled in the picturesque town of San Clemente, our GLC Rug Outlet is where you can find the perfect rug to adorn your space. GLC offers an extensive selection of rugs, serving all the metro area, decor, and design. If you are looking to add more knowledgeable staff will help you discover the rug of your dreams. Additionally, we provide specialized rug services, ensuring that your cherished rugs receive the care and attention they deserve.
            </p>
          </div>
          <div className="relative h-[400px] order-1 md:order-2">
            <Image
              src="/images/locations/san-clemente-store.jpg"
              alt="San Clemente Location"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}