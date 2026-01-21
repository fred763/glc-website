// src/components/rugs/BuyRugsInfo.jsx
import Image from 'next/image';

const BuyRugsInfo = () => {
  return (
    <>
      <div className="bg-background-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                Sell Your Antique Oriental or Persian Rug
              </h2>
              <p className="text-lg leading-relaxed">
                Our distinguished approach sets us apart, as we effortlessly surpass dealer 
                and auction valuations, ensuring you receive an upward 50-20 percent more 
                for your prized possession. With our discerning eye for luxury, we specialize 
                in sourcing exquisite antique Persian, Turkish, Caucasian, and Chinese 
                carpets crafted from the finest wool or silk.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-square md:aspect-[4/3] w-full">
                <Image
                  src="/images/rugs/20221027_155101.jpg"
                  alt="Collection of stacked antique rugs"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                Contact Us To Sell Your Antique Rugs
              </h2>
              <p className="text-lg leading-relaxed">
                We have buy-all, small, and old-time rugs. We&apos;ll pay top prices for vintage or 
                unusual pieces. We are looking for handmade or handwoven Persian, 
                Oriental, or antique rugs. We also accept silk rugs, Chinese rugs, and 
                tapestries. Sell or trade your rug for an excellent deal. We are especially 
                interested in rare and extraordinary rugs of unique value. If you have an old 
                rug in decent condition that you&apos;re looking to sell, we&apos;ll take it off your hands 
                for a reasonable price. Contact us if you&apos;re interested in selling your antique 
                area rug.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-square md:aspect-[4/3] w-full">
                <Image
                  src="/images/rugs/Global-Liquidation-Company-1470771922.jpg"
                  alt="Detailed view of antique rug patterns"
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

export default BuyRugsInfo;