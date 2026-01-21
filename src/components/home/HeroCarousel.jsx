// src/components/home/HeroCarousel.jsx

"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [

  {
    id: 1,
    type: 'content',
    title: "PUBLIC ANNOUNCEMENT",
    subtitle: "DOORS ARE CLOSING FOREVER, FINAL DAYS!",
    highlight: "ABSOLUTELY 77% OFF",
    details: [
      { text: "Guaranteed* lowest prices in the nation or will pay double the difference.", emphasized: true },
      "GLC WILL BEAT ALL ONLINE AND DEPARTMENT STORES, COAST TO COAST",
      "Selling out to the bare walls, Time is running out....",
      "RESERVATIONS RECOMMENDED 1-888-900-4GLC (452)",
      "Every item comes with a certificate of authenticity"
    ],
    notice: "LARGEST ONE-OF-A-KIND INVENTORY IN AMERICA.. BEING LIQUIDATED AT 23 CENTS ON A DOLLAR",
    image: "/images/home/hero-2.jpg",
    buttonText: "FOR MORE DETAILS CLICK HERE",
    buttonLink: "/liquidations"
  },
  {
    id: 2,
    type: 'content',
    title: "Discover Our Rare Collection of Art,",
    subtitle: "Antiques, & Rugs",
    location: "Available at Auction & Liquidated Prices in Pasadena & San Clemente, CA",
    image: "/images/home/hero-1.jpg",
    buttonText: "SHOWROOM LOCATIONS",
    buttonLink: "/locations"
  },
  {
    id: 3,
    type: 'tour',
    title: "Pasadena Outlet Virtual Tour",
    embedUrl: "https://www.google.com/maps/embed?pb=!4v1689171834016!6m8!1m7!1sCAoSLEFGMVFpcE5saTZIV3BoRU5GOWFQbFdUeTU0OW90TjlZajhEeGRxR2ZDMkxD!2m2!1d34.147711744951!2d-118.13197858294!3f201.55!4f-10.819999999999993!5f0.4000000000000002"
  },
  {
    id: 4,
    type: 'tour',
    title: "San Clemente Outlet Virtual Tour",
    embedUrl: "https://www.google.com/maps/embed?pb=!4v1683241789858!6m8!1m7!1sCAoSLEFGMVFpcFByUlBnSkVHcmZ4eWtoenRzZWk2UDlObTU3dlc4RVdzUGtYWWVR!2m2!1d33.435865325594!2d-117.61917362337!3f172.2!4f-7.760000000000005!5f0.4629694304036984"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 10000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const currentSlideData = slides[currentSlide];

  const renderSlideContent = () => {
    if (currentSlideData.type === 'tour') {
      return (
        <div className="relative w-full h-full">
          <h2 className="absolute top-8 left-1/2 -translate-x-1/2 z-10 text-4xl md:text-5xl font-playfair text-white text-center">
            {currentSlideData.title}
          </h2>
          <iframe 
            src={currentSlideData.embedUrl}
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
      );
    }

    return (
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-2">
          {currentSlideData.title}
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
          {currentSlideData.subtitle}
        </h2>
        
        {/* {currentSlideData.highlight && (
          <p className="text-2xl md:text-3xl lg:text-4xl font-dosis text-red-500 font-bold mb-6">
            {currentSlideData.highlight}
          </p>
        )} */}

{currentSlideData.highlight && (
  <p className="text-3xl md:text-4xl lg:text-5xl font-dosis text-red-500 font-bold mb-6">
    {currentSlideData.highlight}
  </p>
)}

        
        {currentSlideData.details && (
          <div className="space-y-2 mb-6">
            {currentSlideData.details.map((detail, index) => {
              if (typeof detail === 'object' && detail.emphasized) {
                return (
                  <p key={index} className="text-xl md:text-2xl lg:text-3xl font-dosis font-extrabold underline decoration-2 text-yellow-300">
                    {detail.text}
                  </p>
                );
              }
              return (
                <p key={index} className="text-lg md:text-xl font-dosis">
                  {detail}
                </p>
              );
            })}
          </div>
        )}

        {currentSlideData.location && (
          <p className="text-xl md:text-2xl font-dosis mb-8">
            {currentSlideData.location}
          </p>
        )}

        {currentSlideData.notice && (
          <p className="text-xl md:text-2xl font-dosis text-red-500 font-bold mb-8">
            {currentSlideData.notice}
          </p>
        )}

        {currentSlideData.buttonText && (
          <Button 
            className="bg-primary hover:bg-primary-dark"
            onClick={() => window.location.href = currentSlideData.buttonLink}
          >
            {currentSlideData.buttonText}
          </Button>
        )}
      </div>
    );
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden mt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={() => setIsPaused(true)}
    >
      {currentSlideData.type === 'content' && (
        <div className="absolute inset-0">
          <Image
            src={currentSlideData.image}
            alt={currentSlideData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {renderSlideContent()}

      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsPaused(true);
          prevSlide();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white z-10"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsPaused(true);
          nextSlide();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white z-10"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setIsPaused(true);
              setCurrentSlide(index);
            }}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

// // src/components/home/HeroCarousel.jsx

// "use client"

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const slides = [
//   // {
//   //   id: 1,
//   //   type: 'content',
//   //   title: "PUBLIC ANNOUNCEMENT",
//   //   subtitle: "EXCITING CHANGES ARE COMING!",
//   //   highlight: "MASSIVE INVENTORY CONSOLIDATION SALE",
//   //   details: [
//   //     "Global Liquidation Company IS NOT going out of business or downsizing!",
//   //     "We are moving our famous private collections to a new Mega location.",
//   //     "We are closing both Pasadena locations after nearly three decades.",
//   //     "New address and details will be announced soon to the General Public!",
//   //     "Every item comes with a certificate of authenticity."
//   //   ],
//   //   notice: "LARGEST INVENTORY IN CALIFORNIA BEING LIQUIDATED AT UNBELIEVABLE PRICES!",
//   //   image: "/images/home/hero-2.jpg",
//   //   buttonText: "FOR MORE DETAILS CLICK HERE",
//   //   buttonLink: "/liquidations"
//   // },
//   {
//     id: 1,
//     type: 'content',
//     title: "PUBLIC ANNOUNCEMENT",
//     subtitle: "DOORS ARE CLOSING FOREVER, FINAL DAYS!",
//     highlight: "ABSOLUTELY 77% OFF",
//     details: [
//       "Guaranteed* lowest prices in the nation or will pay double the difference.",
//       "GLC WILL BEAT ALL ONLINE AND DEPARTMENT STORES, COAST TO COAST",
//       "Selling out to the bare walls, Time is running out....",
//       "RESERVATIONS RECOMMENDED 1-888-900-4GLC (452)",
//       "Every item comes with a certificate of authenticity"
//     ],
//     notice: "LARGEST INVENTORY IN CALIFORNIA BEING LIQUIDATED AT 23 CENTS ON A DOLLAR",
//     image: "/images/home/hero-2.jpg",
//     buttonText: "FOR MORE DETAILS CLICK HERE",
//     buttonLink: "/liquidations"
//   },
//   {
//     id: 2,
//     type: 'content',
//     title: "Discover Our Rare Collection of Art,",
//     subtitle: "Antiques, & Rugs",
//     location: "Available at Auction & Liquidated Prices in Pasadena & San Clemente, CA",
//     image: "/images/home/hero-1.jpg",
//     buttonText: "SHOWROOM LOCATIONS",
//     buttonLink: "/locations"
//   },
//   {
//     id: 3,
//     type: 'tour',
//     title: "Pasadena Outlet Virtual Tour",
//     embedUrl: "https://www.google.com/maps/embed?pb=!4v1689171834016!6m8!1m7!1sCAoSLEFGMVFpcE5saTZIV3BoRU5GOWFQbFdUeTU0OW90TjlZajhEeGRxR2ZDMkxD!2m2!1d34.147711744951!2d-118.13197858294!3f201.55!4f-10.819999999999993!5f0.4000000000000002"
//   },
//   {
//     id: 4,
//     type: 'tour',
//     title: "San Clemente Outlet Virtual Tour",
//     embedUrl: "https://www.google.com/maps/embed?pb=!4v1683241789858!6m8!1m7!1sCAoSLEFGMVFpcFByUlBnSkVHcmZ4eWtoenRzZWk2UDlObTU3dlc4RVdzUGtYWWVR!2m2!1d33.435865325594!2d-117.61917362337!3f172.2!4f-7.760000000000005!5f0.4629694304036984"
//   }
// ];

// const HeroCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     if (!isPaused) {
//       const timer = setInterval(nextSlide, 10000);
//       return () => clearInterval(timer);
//     }
//   }, [isPaused]);

//   const currentSlideData = slides[currentSlide];

//   const renderSlideContent = () => {
//     if (currentSlideData.type === 'tour') {
//       return (
//         <div className="relative w-full h-full">
//           <h2 className="absolute top-8 left-1/2 -translate-x-1/2 z-10 text-4xl md:text-5xl font-playfair text-white text-center">
//             {currentSlideData.title}
//           </h2>
//           <iframe 
//             src={currentSlideData.embedUrl}
//             className="w-full h-full"
//             allowFullScreen
//             loading="lazy"
//           />
//         </div>
//       );
//     }

//     return (
//       <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 max-w-4xl mx-auto">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-2">
//           {currentSlideData.title}
//         </h1>
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
//           {currentSlideData.subtitle}
//         </h2>
        
//         {currentSlideData.highlight && (
//           <p className="text-2xl md:text-3xl lg:text-4xl font-dosis text-red-500 font-bold mb-6">
//             {currentSlideData.highlight}
//           </p>
//         )}
        
//         {currentSlideData.details && (
//           <div className="space-y-2 mb-6">
//             {currentSlideData.details.map((detail, index) => (
//               <p key={index} className="text-lg md:text-xl font-dosis">
//                 {detail}
//               </p>
//             ))}
//           </div>
//         )}

//         {currentSlideData.location && (
//           <p className="text-xl md:text-2xl font-dosis mb-8">
//             {currentSlideData.location}
//           </p>
//         )}

//         {currentSlideData.notice && (
//           <p className="text-xl md:text-2xl font-dosis text-red-500 font-bold mb-8">
//             {currentSlideData.notice}
//           </p>
//         )}

//         {currentSlideData.buttonText && (
//           <Button 
//             className="bg-primary hover:bg-primary-dark"
//             onClick={() => window.location.href = currentSlideData.buttonLink}
//           >
//             {currentSlideData.buttonText}
//           </Button>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div 
//       className="relative h-screen w-full overflow-hidden mt-20"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//       onClick={() => setIsPaused(true)}
//     >
//       {currentSlideData.type === 'content' && (
//         <div className="absolute inset-0">
//           <Image
//             src={currentSlideData.image}
//             alt={currentSlideData.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-black/40" />
//         </div>
//       )}

//       {renderSlideContent()}

//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           setIsPaused(true);
//           prevSlide();
//         }}
//         className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white z-10"
//       >
//         <ChevronLeft size={24} />
//       </button>

//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           setIsPaused(true);
//           nextSlide();
//         }}
//         className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white z-10"
//       >
//         <ChevronRight size={24} />
//       </button>

//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={(e) => {
//               e.stopPropagation();
//               setIsPaused(true);
//               setCurrentSlide(index);
//             }}
//             className={`w-2 h-2 rounded-full ${
//               currentSlide === index ? 'bg-white' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroCarousel;