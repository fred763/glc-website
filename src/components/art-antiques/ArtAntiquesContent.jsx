// src/components/art-antiques/ArtAntiquesContent.jsx

import React from 'react';
import Image from 'next/image';

const ArtAntiquesContent = () => {
  return (
    <>
      {/* Extraordinary Pieces Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                Extraordinary Pieces at Liquidated Prices
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                Indulge in a captivating journey through our exquisitely curated collection 
                that spans the globe. Each piece is meticulously sourced from reputable 
                dealers, renowned art galleries, renowned department stores, and esteemed 
                manufacturers, ensuring the highest quality and authenticity.
              </p>
              <a 
                href="/contact"
                className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                CONTACT US
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-square md:aspect-[4/3] w-full">
                <Image
                  src="/images/antique/GLC-Female-laying-down-Buddha.jpg"
                  alt="Antique Buddha statue"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step Into a World Section */}
      <div className="bg-background-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                Step Into a World of Artistic Rarity
              </h2>
              <p className="text-lg leading-relaxed">
                Our one-of-a-kind items attract an international audience of collectors and 
                connoisseurs. We showcase an extraordinary range of fine art, home 
                furnishings, antiques, rare rugs, and collectibles.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-square md:aspect-[4/3] w-full">
                <Image
                  src="/images/antique/Global-Liquidation-Company-1092065378.jpg"
                  alt="Luxury showroom interior"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indulge in Antiquity Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
            <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                Indulge in the Allure of Antiquity
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                Elevate your interiors with these rare finds, meticulously crafted and selected 
                to captivate and inspire. Our collection represents centuries of artistic tradition 
                and craftsmanship, offering timeless elegance that transcends trends and fads.
              </p>
              <a 
                href="/gallery"
                className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                VIEW GALLERY
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-square md:aspect-[4/3] w-full">
                <Image
                  src="/images/antique/Global-Liquidation-Company-145836763.jpg"
                  alt="Elegant antique interior"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtAntiquesContent;