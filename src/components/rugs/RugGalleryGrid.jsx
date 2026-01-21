// src/components/rugs/RugGalleryGrid.jsx
"use client"

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const rugImages = [
    {
      src: "/images/gallery/53929428552__92AA2129-0FF7-42B1-A644-C8AF861BD5FD.jpg",
      thumbnail: "/images/gallery/53929428552__92AA2129-0FF7-42B1-A644-C8AF861BD5FD-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/b6065f_0dee6a6f3d7c40bdab7ca28c40884382.jpg",
      thumbnail: "/images/gallery/b6065f_0dee6a6f3d7c40bdab7ca28c40884382-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/b6065f_1c509c7e4e4b4bc2878de0d81a9d3eaf.jpg",
      thumbnail: "/images/gallery/b6065f_1c509c7e4e4b4bc2878de0d81a9d3eaf-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/b6065f_001f4bc6c9cc4fdd81bdb39aae8ef7ca.jpg",
      thumbnail: "/images/gallery/b6065f_001f4bc6c9cc4fdd81bdb39aae8ef7ca-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/b6065f_1f54456c27eb4f238b3c055ca63588c2.jpg",
      thumbnail: "/images/gallery/b6065f_1f54456c27eb4f238b3c055ca63588c2-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/b6065f_3b44aa86bdaf4998a05183f01b2f5f24.jpg",
      thumbnail: "/images/gallery/b6065f_3b44aa86bdaf4998a05183f01b2f5f24-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/b6065f_3fa9d33193544d1b89a6724ed4aa597a.jpg",
      thumbnail: "/images/gallery/b6065f_3fa9d33193544d1b89a6724ed4aa597a-480x449.jpg",
      alt: "Rugs"
    },
    {
      src: "/images/gallery/b6065f_4e98ce6dd86d49f589c460f6ab249cc4.jpg",
      thumbnail: "/images/gallery/b6065f_4e98ce6dd86d49f589c460f6ab249cc4-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/b6065f_4ea7a12177b347339628ec14c8744ce1.jpg",
      thumbnail: "/images/gallery/b6065f_4ea7a12177b347339628ec14c8744ce1-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/b6065f_6a2e1b9b9e964178b1c9bfe09e43742e.jpg",
      thumbnail: "/images/gallery/b6065f_6a2e1b9b9e964178b1c9bfe09e43742e-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/b6065f_8c809e19606247aa8bd7c3d5690d202b.jpg",
      thumbnail: "/images/gallery/b6065f_8c809e19606247aa8bd7c3d5690d202b-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/b6065f_8cae91f868ae4ce1bc3769145e844ea1.jpg",
      thumbnail: "/images/gallery/b6065f_8cae91f868ae4ce1bc3769145e844ea1-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/b6065f_9f20b9e7be0f426083d36a2639bbc40e.jpg",
      thumbnail: "/images/gallery/b6065f_9f20b9e7be0f426083d36a2639bbc40e-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/b6065f_60c04b44b965471ea7faf57b782dd85b.jpg",
      thumbnail: "/images/gallery/b6065f_60c04b44b965471ea7faf57b782dd85b-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/b6065f_620daefe317a4d8e91c537592f71f4f0.jpg",
      thumbnail: "/images/gallery/b6065f_620daefe317a4d8e91c537592f71f4f0-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/IMG_1042-scaled-1-e1683242675149.jpg",
      thumbnail: "/images/gallery/IMG_1042-scaled-1-e1683242675149-480x480.jpg",
      alt: "Rug with dog"
    },
    {
      src: "/images/gallery/IMG_1065-scaled-1-e1683242684214.jpg",
      thumbnail: "/images/gallery/IMG_1065-scaled-1-e1683242684214-480x480.jpg",
      alt: "Rugs"
    },
    {
      src: "/images/gallery/IMG_1306-scaled-1.jpg",
      thumbnail: "/images/gallery/IMG_1306-scaled-1-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/IMG_1443-scaled-1.jpg",
      thumbnail: "/images/gallery/IMG_1443-scaled-1-480x480.jpg",
      alt: "Rug"
    },
    {
      src: "/images/gallery/Isfahan-4226-1.jpg",
      thumbnail: "/images/gallery/Isfahan-4226-1-480x464.jpg",
      alt: "Isfahan Rug"
    },
    {
      src: "/images/gallery/Qum-5862-1.jpg",
      thumbnail: "/images/gallery/Qum-5862-1-480x480.jpg",
      alt: "Qum Rug"
    },
    {
      src: "/images/gallery/Qum-Pessian-silk-3262-1.jpg",
      thumbnail: "/images/gallery/Qum-Pessian-silk-3262-1-480x480.jpg",
      alt: "Qum Pessian Silk Rug"
    },
    {
      src: "/images/gallery/Qum-silk-6990-1-scaled-1.jpg",
      thumbnail: "/images/gallery/Qum-silk-6990-1-scaled-1-480x480.jpg",
      alt: "Qum Silk Rug"
    },
    {
      src: "/images/gallery/Sarafian-Signiture-Iran-6988-1.jpg",
      thumbnail: "/images/gallery/Sarafian-Signiture-Iran-6988-1-480x480.jpg",
      alt: "Sarafian Signature Iranian Rug"
    },
    {
      src: "/images/gallery/Sepahan-Persian-6989-1.jpg",
      thumbnail: "/images/gallery/Sepahan-Persian-6989-1-480x480.jpg",
      alt: "Sepahan Persian Rug"
    }
];

const RugGalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-background-dark py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-white text-center mb-8">
          Rug Gallery
        </h2>
        <p className="text-white text-center max-w-4xl mx-auto mb-12">
          Explore our online gallery or visit our showroom to discover the captivating beauty of our hand-woven rugs. 
          Immerse yourself in the intricate patterns, vibrant colors, and luxurious textures that define our collection.
        </p>
        
        {/* Main Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {rugImages.map((image, index) => (
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
                  src={rugImages[selectedImage].src}
                  alt={rugImages[selectedImage].alt}
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

export default RugGalleryGrid;