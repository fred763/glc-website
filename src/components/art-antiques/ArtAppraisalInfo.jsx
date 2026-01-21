import Image from 'next/image';

const ArtAppraisalInfo = () => {
  return (
    <>
      {/* Intro Section */}
      <div className="bg-background-dark text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            Discover the True Value & Significance of Your Fine Art
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Professional Expertise: With decades of experience in the art market, our appraisers bring specialized knowledge and 
            refined expertise to every valuation. We combine extensive understanding of art history, market trends, and authentication 
            techniques with unwavering professionalism and integrity, ensuring you receive a thorough and accurate appraisal.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            CONTACT US
          </a>
        </div>
      </div>

      {/* Value Section with Image */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="relative aspect-square md:aspect-[4/3] w-full">
                <Image
                  src="/images/gramophone.jpg"
                  alt="Fine art appraisal process"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                Reveal Hidden Treasures
              </h2>
              <p className="text-lg leading-relaxed">
                Did you know that artwork with unique provenance, historical significance, or 
                distinctive techniques may hold substantially greater value than anticipated? Often, 
                subtle details, obscure signatures, or historical connections can dramatically 
                enhance a piece&apos;s worth. Our expert appraisers possess the trained eye and specialized 
                knowledge to identify these valuable characteristics that contribute to your artwork&apos;s 
                true market value.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Worth Section */}
      <div className="bg-background-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl mb-4">
              Understand Your Art&apos;s Worth
            </h2>
            <p className="text-lg leading-relaxed">
              We offer professional art appraisal services for all types of fine art and collectibles. Value is determined by authenticity, provenance, artist reputation, rarity, condition, size, medium, subject matter, and current market demand. We will help you understand your artwork&apos;s true worth and establish proper documentation. The two types of appraisals we offer are:
            </p>
          </div>

          {/* Appraisal Types */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl mb-4">
                Formal Art Consultation
              </h3>
              <p className="text-lg leading-relaxed">
                Bring your artwork to our showroom in Pasadena or San Clemente for a professional 
                consultation if you want to learn more about its history, the artist, 
                creation period, medium, and technique. This service provides valuable insights 
                into your piece without formal documentation.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl mb-4">
                Documented Art Appraisal
              </h3>
              <p className="text-lg leading-relaxed">
                For insurance purposes, estate planning, donations, and tax considerations, a formal 
                written appraisal is essential. For a professional fee, GLC provides comprehensive 
                documented appraisals that meet IRS, insurance, and legal requirements. These detailed 
                reports include thorough analysis, comparative market data, and a formal valuation. 
                We recommend maintaining digital photographs of your artwork alongside your appraisal 
                documents in a secure location.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Determination Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            Comprehensive Art Valuation Process
          </h2>
          <p className="text-lg leading-relaxed">
            We provide expert appraisals for family heirlooms, inherited collections, and recently acquired artworks to 
            help you discover their historical significance, artistic importance, and market value. Our meticulous evaluation 
            process examines every aspect—from the artist&apos;s signature and technique to the condition, provenance, and current 
            market factors that influence value. We analyze comparable sales data, auction results, and gallery pricing to 
            determine accurate fair market values. Art appraisal not only establishes monetary worth but provides essential 
            documentation for insurance coverage, estate planning, and proof of ownership. Our appraisals can also reveal 
            fascinating historical contexts and artistic significance that enhance your appreciation of the piece.
          </p>
        </div>
      </div>
    </>
  );
};

export default ArtAppraisalInfo;