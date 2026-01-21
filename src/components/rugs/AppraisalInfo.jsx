// src/components/rugs/AppraisalInfo.jsx
import Image from 'next/image';

const AppraisalInfo = () => {
  return (
    <>
      {/* Intro Section */}
      <div className="bg-background-dark text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            Unlock the Value & History of Your Oriental & Persian Rugs
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Trustworthy Expertise: With years of experience in the rug industry, our appraisers possess the knowledge and 
            expertise necessary to provide accurate and reliable valuations. We combine our deep understanding of rugs with a 
            commitment to professionalism and integrity, ensuring that you receive an appraisal you can trust.
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
                  src="/images/rugs/b6065f_98447e6859c54744a3d453f84b8fe2f6-1024x683-2.jpg"
                  alt="Collection of oriental and Persian rugs"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                Uncover Hidden Value
              </h2>
              <p className="text-lg leading-relaxed">
                Did you know that an Oriental or Persian rug with a unique or unusual 
                pattern may hold greater worth than you realize? Sometimes, unexpected 
                variations or &quot;mistakes&quot; made during the weaving process can virtually 
                enhance a rug&apos;s value. Our expert appraisers have an eye for detail and can 
                identify these distinctive features that contribute to the rug&apos;s overall worth.
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
              Know the Worth of Your Rug
            </h2>
            <p className="text-lg leading-relaxed">
              We offer professional rug appraisal services. Value is determined by age, size, quality, condition, nation of origin, color scheme, pattern, and style. We will help you know your rug&apos;s worth and demonstrate ownership. The two types of appraisals we offer are:
            </p>
          </div>

          {/* Appraisal Types */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl mb-4">
                Professional Rug Consultation
              </h3>
              <p className="text-lg leading-relaxed">
                Bring your rug to our Oriental Rug Showroom in Pasadena or San Clemente for a 
                professional evaluation if you simply want to learn more about it, such as when it was 
                woven, who made it, and what material it was made of.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl mb-4">
                Documented Rug Appraisal
              </h3>
              <p className="text-lg leading-relaxed">
                For estate planning, insurance, and tax considerations, written appraisals are 
                preferred. For a professional fee, GLC can offer a documented evaluation under those 
                circumstances. Whatever type of assessment you use, make sure to take pictures of 
                your carpets and save them in a secure location with your other critical documents.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Determination Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            Determine the Value of Your Rug
          </h2>
          <p className="text-lg leading-relaxed">
            We offer expert appraisals for family heirloom rugs and recently purchased carpets to help you learn more about 
            their history, origin, and background. We will analyze the rug and determine its origin and value so you know what it&apos;s 
            worth. Unique or unusual patterns may make your rug more valuable than you realize. Even flubs in the pattern that 
            occurred accidentally when the weaver was working can be beneficial to the value of your rug as it differentiates 
            the rug to make it more unique. Rug appraisal not only determines the monetary value of your rug, but it offers 
            added security and proof of ownership.
          </p>
        </div>
      </div>
    </>
  );
};

export default AppraisalInfo;