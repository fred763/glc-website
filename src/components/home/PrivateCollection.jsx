// src/components/home/PrivateCollection.jsx

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const PrivateCollection = () => {
  return (
    <div className="bg-[#474747] text-white py-24">
      <div className="container mx-auto text-center px-4">
        <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-8">Our Exquisite Private Collection</h2>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="font-dosis text-lg">
            Come to Global Liquidation Company and discover a world of exquisite treasures. Visit one of our showrooms or step 
            into our virtual gallery and immerse yourself in the beauty of our expansive inventory, which proudly boasts the 
            largest selection of fine rugs, curated art & antiques nationwide.
          </p>
          
          <p className="font-dosis text-lg">
            In addition to our remarkable rug selection, we invite you to explore our comprehensive inventory for auction. Delve 
            into a realm of rare antiques, captivating paintings, intriguing artifacts, elegant furniture, and stunning home décor, 
            all available at incredible prices.
          </p>
        </div>

        <Button 
          asChild 
          className="bg-primary hover:bg-primary/90 mt-10 font-dosis uppercase"
        >
          <Link href="/contact">CONTACT US</Link>
        </Button>
      </div>
    </div>
  );
};

export default PrivateCollection;