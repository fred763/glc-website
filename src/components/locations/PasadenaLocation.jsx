// src/components/locations/PasadenaLocation.jsx
import Image from 'next/image';

export default function PasadenaLocation() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/images/locations/pasadena-store.jpg"
              alt="Pasadena Location"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-playfair">
              Pasadena Location: The Hub of Liquidated Masterpieces
            </h2>
            <p className="text-gray-600 font-dosis">
              Located in the heart of Pasadena, our flagship store is a haven for art enthusiasts, antique lovers and rug aficionados.Immerse yourself in a curated collection of liquidated items, including exquisite art pieces, timeless antiques, and luxurious rugs. By advanced studies, we go above and beyond to ensure that we provide the most compelling experience for our customers. Our knowledgeable staff is always at your service, ready to guide you through the luxurious world of liquidated masterpieces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}