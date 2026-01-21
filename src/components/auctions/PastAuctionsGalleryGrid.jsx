// src/components/auctions/PastAuctionsGalleryGrid.jsx
"use client"

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const auctionImages = [
  {
    src: "/images/past-auctions-gallery/1003c3bd-0b40-4267-84ed-61a554f62111.jpeg",
    thumbnail: "/images/past-auctions-gallery/1003c3bd-0b40-4267-84ed-61a554f62111.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/15326aac-d3cf-4d71-a3f8-8a77271b3f00.jpeg",
    thumbnail: "/images/past-auctions-gallery/15326aac-d3cf-4d71-a3f8-8a77271b3f00.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/3e76d8f4-3645-4e85-a118-765197eb3420.jpeg",
    thumbnail: "/images/past-auctions-gallery/3e76d8f4-3645-4e85-a118-765197eb3420.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/4025f360-5576-48dd-bdd9-8e515835dde0.jpeg",
    thumbnail: "/images/past-auctions-gallery/4025f360-5576-48dd-bdd9-8e515835dde0.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/5339ced1-7a62-47f6-bf0e-82c74cfc93f5.jpeg",
    thumbnail: "/images/past-auctions-gallery/5339ced1-7a62-47f6-bf0e-82c74cfc93f5.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/6283c798-ab3b-423f-b959-65227f0f4d32.jpeg",
    thumbnail: "/images/past-auctions-gallery/6283c798-ab3b-423f-b959-65227f0f4d32.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/74918557-31e1-4fda-918a-69d53c805963.jpeg",
    thumbnail: "/images/past-auctions-gallery/74918557-31e1-4fda-918a-69d53c805963.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/74b92fd0-748e-47a9-860e-21a0149c6223.jpeg",
    thumbnail: "/images/past-auctions-gallery/74b92fd0-748e-47a9-860e-21a0149c6223.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/78176332-40d1-497e-b774-fc15612fb1d5.jpeg",
    thumbnail: "/images/past-auctions-gallery/78176332-40d1-497e-b774-fc15612fb1d5.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/8e60050d-686d-45d9-8560-279f4d91b005.jpeg",
    thumbnail: "/images/past-auctions-gallery/8e60050d-686d-45d9-8560-279f4d91b005.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/9102f3cb-fb5d-45e8-87aa-2e18825c45a3.jpeg",
    thumbnail: "/images/past-auctions-gallery/9102f3cb-fb5d-45e8-87aa-2e18825c45a3.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/a28925bc-e145-4db3-90d9-8f2d262c6cbf.jpeg",
    thumbnail: "/images/past-auctions-gallery/a28925bc-e145-4db3-90d9-8f2d262c6cbf.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/a4e7da38-e870-4fa2-be71-540a3fd9ec9e.jpeg",
    thumbnail: "/images/past-auctions-gallery/a4e7da38-e870-4fa2-be71-540a3fd9ec9e.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/accd381e-dae4-4395-8001-e30d4305be71.jpeg",
    thumbnail: "/images/past-auctions-gallery/accd381e-dae4-4395-8001-e30d4305be71.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/b6529bbe-f4c7-4aab-b510-72094eb92536.jpeg",
    thumbnail: "/images/past-auctions-gallery/b6529bbe-f4c7-4aab-b510-72094eb92536.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/b9bb28c4-59b3-40e3-953b-bd846770eeb9.jpeg",
    thumbnail: "/images/past-auctions-gallery/b9bb28c4-59b3-40e3-953b-bd846770eeb9.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/c38289bb-7955-4484-8ceb-d7e07c2fb754.jpeg",
    thumbnail: "/images/past-auctions-gallery/c38289bb-7955-4484-8ceb-d7e07c2fb754.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/c5a5fd5f-bd58-41be-923d-980a3bf2b880.jpeg",
    thumbnail: "/images/past-auctions-gallery/c5a5fd5f-bd58-41be-923d-980a3bf2b880.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/cfff9d28-6693-408c-90e5-1737975c5fac.jpeg",
    thumbnail: "/images/past-auctions-gallery/cfff9d28-6693-408c-90e5-1737975c5fac.jpeg",
    alt: "Past Auction Item"
  },
  {
    src: "/images/past-auctions-gallery/ef6bfd01-f108-49e2-89b7-4d254a82776b.jpeg",
    thumbnail: "/images/past-auctions-gallery/ef6bfd01-f108-49e2-89b7-4d254a82776b.jpeg",
    alt: "Past Auction Item"
  }
];

const PastAuctionsGalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-background-dark py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-white text-center mb-8">
          Past Auctions Gallery
        </h2>
        <p className="text-white text-center max-w-4xl mx-auto mb-12">
          Explore our collection of items from past auctions. These unique pieces showcase the quality and diversity of offerings 
          that have been featured in our previous auctions and liquidation events.
        </p>
        
        {/* Main Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {auctionImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-square cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.thumbnail}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl w-full mx-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
                aria-label="Close gallery"
              >
                <X size={24} />
              </button>
              
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[16/9] w-full">
                <Image
                  src={auctionImages[selectedImage].src}
                  alt={auctionImages[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PastAuctionsGalleryGrid;