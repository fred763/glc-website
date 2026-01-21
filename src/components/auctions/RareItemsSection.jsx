// src/components/auctions/RareItemsSection.jsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RareItemsSection = () => {
  return (
    <div className="bg-background-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-6 text-white">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl">
              Want Us to Auction off Your Rare Items?
            </h2>
            <p className="text-gray-300">
              We are truly collectors at heart, the higher quality of the collection, the 
              greater our level of interest. The process starts with a full assessment and 
              appraisal of your fine and rare art, antiques, collectibles, rugs, and rare 
              cars.
            </p>
            <p className="text-gray-300">
              Please fill out the{' '}  
              <Link href="/contact" className="text-primary hover:underline">
                form
              </Link>{' '}
              if you have photos of your items you wish to 
              auction or liquidate, please email them to{' '}
              <a href="mailto:info@GLCuctions.com" className="text-primary hover:underline">
                info@GLCuctions.com
              </a>
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/auction/auctioneer.jpg"
              alt="Professional auctioneer"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RareItemsSection;