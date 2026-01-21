// src/components/home/HeirloomRugs.jsx

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeirloomRugs = () => {
  return (
    <div className="bg-[#474747] text-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 py-16 px-4">
        <div className="relative h-[500px] md:h-[600px] order-1 md:order-none">
          <Image 
            src="/images/home/heirloom.jpg"
            alt="Collection of handwoven rugs"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight">
            Heirloom-Worthy Handwoven Rugs
          </h2>
          
          <p className="font-dosis text-lg">
            Explore our exceptional selection of <span className="text-primary">fine rugs</span> hailing from Persia, India, 
            Pakistan, Iran, China, and Afghanistan. Each rug has been personally 
            handpicked by our team to ensure its quality and durability, guaranteeing 
            they will stand the test of time and be cherished for generations to come.
          </p>

          <Button 
            asChild 
            className="bg-primary hover:bg-primary/90 w-fit font-dosis mt-4"
          >
            <Link href="/rugs">LEARN MORE</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeirloomRugs;