// src/components/home/DiscoverItems.jsx

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const DiscoverItems = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 py-24 px-4">
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-[#4A4A4A] leading-tight">
            Discover One-Of-A-Kind Items Available at Auction & Liquidation Prices
          </h2>
          
          <div className="space-y-4">
            <p className="font-dosis text-gray-700">
              Our company specializes in conducting a wide range of liquidations and 
              <span className="text-primary"> auctions</span> for an extensive variety of antique assets from around the world. 
              We have established partnerships with renowned collectors and dealers who 
              have retired, closed their businesses, or faced financial challenges.
            </p>

            <p className="font-dosis text-gray-700">
              With two dedicated showrooms available for appointments and
              <span className="text-primary"> liquidation auctions</span>, we offer a convenient and immersive experience for our clients.
            </p>

            <p className="font-dosis text-gray-700">
              Whether you&apos;re a seasoned collector, an interior designer seeking unique 
              pieces, or a connoisseur of beauty, you&apos;ll find something to captivate your 
              imagination.
            </p>
          </div>

          <Button 
            asChild 
            className="bg-primary hover:bg-primary/90 w-fit text-white font-dosis mt-6"
          >
            <Link href="/liquidations">LEARN MORE</Link>
          </Button>
        </div>

        <div className="relative h-[600px]">
          <Image 
            src="/images/home/discover.jpg"
            alt="Antique showroom display with artwork and furniture"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default DiscoverItems;