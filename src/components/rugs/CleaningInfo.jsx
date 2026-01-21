// src/components/rugs/CleaningInfo.jsx
import Image from 'next/image';

const CleaningInfo = () => {
  return (
    <>
      {/* Intro Section */}
      <div className="bg-background-dark text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            Professional Organic Wash & Repair for Oriental & Persian Rugs
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Our company specializes in washing and repairing rugs. Please fill out the form below and we will be in touch to 
            answer your questions promptly. In today&apos;s growing use of skilled cleaning can restore the deep color organic.
            With over 20 years of experience, we know exactly what your Oriental rug.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            CONTACT US
          </a>
        </div>
      </div>

      {/* Organic Cleaning Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="relative aspect-square md:aspect-[4/3] w-full">
                <Image
                  src="/images/rugs/Global-Liquidation-Company-1397038048.jpg"
                  alt="Professional rug cleaning process"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                Organic Cleaning
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A professional Oriental rug cleaning will enhance your carpets. We are one of 
                the very few companies who wash our rugs by hand, only using organic soap 
                to bring out the richness of color and softness of the wool. Depending on the 
                amount of traffic, a professional washing is recommended every one to three 
                years to maintain the value and longevity of your rug.
              </p>
              <h3 className="font-playfair text-xl mb-4">Remove, Dust, Dirt, & Soil</h3>
              <p className="text-lg leading-relaxed">
                Oriental rugs, especially antique ones, need deep cleaning of soil and dirt from 
                wool, silk, or cotton fibers. Earth, dust, and dirt particles can shred hair and 
                abrade the foundation and the knots. This kind of harm is avoided by 
                professional cleaning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Restoration & Repair Section */}
      <div className="bg-background-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                Restoration
              </h2>
              <p className="text-lg leading-relaxed">
                The repair process has to be small, helps and keeps from getting bigger is to take 
                care of damage as soon as you see it. Here at GLC Persian Rugs, we are capable of 
                repairing a broad range of damage to actually rug restoration and repair is our area 
                of expertise. All of the work is completed on-site by our knowledgeable employees. 
                Your rugs won&apos;t be sent to anyone else. Here at GLC Persian Rugs, we are 
                capable of repairing a broad range of damage to actually rug restoration and repair 
                is our area of expertise. All of the work is completed on-site by our knowledgeable 
                employees. Your rugs won&apos;t be sent to anyone else.
              </p>
            </div>
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">
                Repair & Restore Worn Rugs
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Rug restoration, repair, and cleaning is our area of expertise. We can restore 
                damaged rugs, eliminate dirt, and restore the color and softness of your carpet. Get 
                your rug cleaned regularly and address damage before it becomes a bigger 
                problem. Expert rug restoration and repair require professional handling 
                techniques performed by our knowledgeable professionals. To maintain the quality 
                of your rug over time, we recommend the following practices:
              </p>
              <ul className="grid grid-cols-2 gap-4 list-disc list-inside">
                <div>
                  <li>Vacuum regularly</li>
                  <li>Use rug padding</li>
                  <li>Rotate your rug once a year</li>
                </div>
                <div>
                  <li>Saturate, blot, and gently brush to remove stains</li>
                  <li>Get your rug cleaned every one to three years</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Guide */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">
            Ways to Maintain Your Rugs at Home
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-playfair text-2xl mb-4">Rotation</h3>
              <p className="text-lg leading-relaxed">
                To ensure even wear, every rug should be rotated once a year. 
                Depending on the traffic, the rotation may vary from six 
                months to two years.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-2xl mb-4">Vacuuming</h3>
              <p className="text-lg leading-relaxed">
                Oriental rugs, like most carpets, should be vacuumed on a 
                regular basis to remove dirt and restore life to the fibers. Be 
                sure not to vacuum the fringe.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-2xl mb-4">Padding</h3>
              <p className="text-lg leading-relaxed">
                A quality pad used under any rug helps protect it from dirt, 
                wear and slippage. We will be happy to provide you with the 
                correct padding.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="font-playfair text-2xl mb-4">Stain Removal General Procedure</h3>
              <p className="text-lg leading-relaxed">
                Always take to brush lightly from the outer edge toward the 
                center of the stain to prevent spreading or scarring. The ring 
                that sometimes develops is much harder to remove than most 
                carpets. Do not try to at-driven stains, saturate, blot, and 
                brush. Repeat the operation as often as necessary to complete 
                the stain completely.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-2xl mb-4">Removing</h3>
              <p className="text-lg leading-relaxed">
                When spills occur, dilute with plenty of water. Next, blot from 
                the edge of the spill toward the center. Avoid rubbing. No 
                chemical cleaning agent should be used without consulting a 
                reliable rug repair firm to check the spill immediately. the 
                following information and chart will help you adequate most 
                stains. For further advice, contact us. We will be glad to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CleaningInfo;