// src/components/home/ServiceCategories.jsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCategories = () => {
  const categories = [
    {
      title: "Rugs",
      image: "/images/home/btn1.jpg",
      link: "/rugs"
    },
    {
      title: "Auction Events",
      image: "/images/home/btn2.jpg",
      link: "/auctions"
    },
    {
      title: "Art & Antique Liquidations",
      image: "/images/home/btn3.jpg",
      link: "/art-antiques"
    },
    {
      title: "Showroom Locations",
      image: "/images/home/LogoBlack.jpg",
      link: "/locations"
    }
  ];

  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 px-4">
        {categories.map((category, index) => (
          <Link 
            key={index}
            href={category.link}
            className="flex flex-col items-center group"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105">
              <Image 
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-dosis text-center text-lg text-gray-800">{category.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategories;