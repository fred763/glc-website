// src/components/about/AboutContent.js

"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const AboutContent = () => {
  return (
    <>
      {/* Heritage Section */}
      <div className="bg-background-dark text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-playfair text-4xl md:text-5xl mb-8">
            Preserving Heritage,<br/>Creating Legacies
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Global Liquidation Company was established nearly five decades ago. We have antique rugs collected from as far 
            back as 1828. We have been in business for four generations with stores in 22 states in addition to South America, 
            Europe, and the Far East. Our company has a worldwide reputation with a unique and successful business model. We 
            strive to uphold honesty, integrity, and fair prices continually. Our reputable company liquidates and auctions some 
            of the most diversified antique inventory in the world, including rare Persian and Oriental rugs.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary-dark">
              CONTACT US
            </Button>
          </Link>
        </div>
      </div>

      {/* Possibilities Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative aspect-square">
                <Image
                  src="/images/about/Global-Liquidation-Company-889636870.jpg"
                  alt="Antique rug artistry"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                A World of<br/>Possibilities Awaits
              </h2>
              <p className="text-lg leading-relaxed">
                Contact us today to embark on a journey through history, and let our 
                knowledgeable and passionate team guide you in selecting the perfect 
                masterpiece that will evoke wonder and admiration in your space. Welcome 
                to Global Liquidation Company, where the past intertwines with the present, 
                and extraordinary legacies are born.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;