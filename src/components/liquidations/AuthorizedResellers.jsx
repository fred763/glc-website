// src/components/liquidations/AuthorizedResellers.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function AuthorizedResellers() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-playfair text-gray-900">
            Authorized Resellers of Liquidated Masterpieces
          </h2>
          
          <p className="text-gray-600 font-dosis">
            Don&apos;t miss your chance to acquire extraordinary pieces at prices that will leave you amazed.
          </p>
          
          <p className="text-gray-600 font-dosis">
            After five generations of collecting valuable items from all over the globe, our multi-million-dollar collection of unique valuable Oriental and Persian rugs, rare art, antiques, sculptures, artifacts, and collectibles is gathered under one roof.
          </p>
          
          <p className="text-gray-600 font-dosis">
            Book a showroom appointment at our{' '}
            <Link href="/locations/pasadena" className="text-primary hover:text-primary-dark">
              Pasadena location
            </Link>{' '}
            to view our collectibles at rare low prices.
          </p>
        </div>
        
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/statue.jpg"
            alt="Antique Statue"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}