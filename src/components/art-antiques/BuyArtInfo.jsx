import Image from 'next/image';

const BuyArtInfo = () => {
  return (
    <>
      <div className="bg-background-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                Sell Your Fine Art & Collectibles
              </h2>
              <p className="text-lg leading-relaxed">
                Our distinguished approach sets us apart, as we consistently outpace gallery 
                and auction house valuations, ensuring you receive 15-30 percent more for your 
                cherished artwork. With our expert eye for quality and provenance, we specialize 
                in acquiring fine paintings, sculptures, prints, and collectibles from renowned 
                artists across various periods and movements.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-square md:aspect-[4/3] w-full">
                <Image
                  src="/images/vase.jpg"
                  alt="Collection of fine art on display"
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
                Contact Us To Sell Your Artwork
              </h2>
              <p className="text-lg leading-relaxed">
                We purchase artwork of all sizes, genres, and periods. We&apos;ll pay premium prices 
                for vintage, contemporary, or unusual pieces that showcase exceptional craftsmanship 
                and artistic merit. We are looking for original paintings, limited edition prints, 
                bronze sculptures, art glass, and other valuable collectibles. Sell or trade your 
                artwork for an excellent deal. We are especially interested in rare and extraordinary 
                pieces with unique provenance or historical significance. If you have artwork in good 
                condition that you&apos;re looking to sell, we&apos;ll offer you a fair and competitive price. 
                Contact us if you&apos;re interested in selling your fine art or collectibles.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-square md:aspect-[4/3] w-full">
                <Image
                  src="/images/woodart.jpg"
                  alt="Art appraisal process"
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

export default BuyArtInfo;