"use client";
import Hero from '@/components/shared/Hero';
import DiscoverBanner from '@/components/shared/DiscoverBanner';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const paintings = [
  'IMG_1226.jpg',
  'IMG_1228.JPG',
  'IMG_1269.JPG',
  'IMG_1277.JPG',
];

const furnitures = [
  '5-2 ORIENT TABLE.JPG',
  '24-8 (4 panel screen).JPG',
  '50847-B12 4 drawer M.T. Victorian.JPG',
  '51851-B12 Ebony decorated two drawer nights stand.JPG',
  '52150-B12 Lacquered chinese box on stand.JPG',
  '52153-B12 Brown lacquerer chinese cabinet.JPG',
  '20150520_163054 (1).jpg',
  '20150520_163110.jpg',
  'GLC-ABEL1 51795-B-12 French style walnut table with ormolu mounts.JPG',
  'IMG_0843.JPG',
  'IMG_1212.JPG',
  'IMG_1250.JPG',
  'IMG_1252.JPG',
  'IMG_1255 (1).JPG',
];

const sculptures = [
  '46070-B12 Bronze figure of boy with hand pipes.JPG',
  '48079-B12 Marble kneeling buddah.JPG',
  '48092-B12 Carved stone kneeling figure.JPG',
  '48093-B12 Pair of carved stone tomb gurdians.JPG',
  '48131-B12 Carved stone head of buddah.JPG',
  '50896-B12 Lladro seated figure.JPG',
  'Chinese statue with detached head.JPG',
  'GLC-ABEL-2 51445-B12 Bronze clown with umbrella.JPG',
  'GLC-ABEL-3 51406-B12 South african carved stone animal.JPG',
  'IMG_1195.JPG',
  'IMG_1197.JPG',
  'IMG_1200.JPG',
  'IMG_1201.JPG',
  'IMG_1202.JPG',
  'IMG_1203.JPG',
  'IMG_1206.JPG',
  'IMG_1215.JPG',
  'IMG_1216.JPG',
  'IMG_1217.JPG',
  'IMG_1218.JPG',
  'IMG_1258.JPG',
  'IMG_1259.JPG',
  'IMG_1264.JPG',
  'IMG_1267.JPG',
];

const ImageGallery = ({ title, images = [] }) => {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 4);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < images.length - itemsPerView) setIndex(index + 1);
  };

  const openLightbox = (idx) => {
    setIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="mb-16 relative">
      <h2 className="font-dosis text-2xl md:text-3xl text-gray-700 mb-4">{title}</h2>

      {images.length === 0 ? (
        <p className="text-gray-500 text-center">No images available for {title}.</p>
      ) : (
        <div className="relative overflow-hidden">
          {/* Left Button - Fixed visibility */}
          <button
            onClick={handlePrev}
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 ${
              index === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={index === 0}
          >
            <ChevronLeft />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${(index / itemsPerView) * 100}%)` }}
            >
              {images.map((image, idx) => (
                <img
                  key={idx}
                  src={`/images/${title.toLowerCase()}/${image}`}
                  alt={image}
                  className="w-full md:w-1/4 cursor-pointer object-cover aspect-square"
                  onClick={() => openLightbox(idx)}
                />
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 ${
              index >= images.length - itemsPerView ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={index >= images.length - itemsPerView}
          >
            <ChevronRight />
          </button>
        </div>
      )}

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]">
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white bg-gray-700 p-2 rounded-full z-[1001]">
            <X size={32} />
          </button>
          <button
            onClick={handlePrev}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-[1001] ${
              index === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={index === 0}
          >
            <ChevronLeft />
          </button>
          <img src={`/images/${title.toLowerCase()}/${images[index]}`} alt={images[index]} className="max-w-full max-h-full z-[1000]" />
          <button
            onClick={handleNext}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-[1001] ${
              index === images.length - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={index === images.length - 1}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default function GalleryPage() {
  return (
    <main>
      <Hero title="Gallery" backgroundImage="/images/hero-bg.jpg" height="lg" />

      {/* Image Galleries */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <ImageGallery title="Paintings" images={paintings} />
          <ImageGallery title="Furnitures" images={furnitures} />
          <ImageGallery title="Sculptures" images={sculptures} />
        </div>
      </div>

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}
