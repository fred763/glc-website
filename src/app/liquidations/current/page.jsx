// src/app/liquidations/current/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/shared/Hero';
import Locations from '@/components/shared/Locations';
import DiscoverBanner from '@/components/shared/DiscoverBanner';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Current Liquidations | Global Liquidation Company',
  description: 'Global Liquidation Company is liquidating with absolutely 77% off. Guaranteed lowest prices in the nation or we will pay double the difference.',
};

export default function CurrentLiquidationsPage() {
  return (
    <main>
      <Hero
        title="Current Liquidations"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />

      <section className="py-16 bg-background-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-4">
              PUBLIC ANNOUNCEMENT
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-6">
              DOORS ARE CLOSING FOREVER, FINAL DAYS!
            </h2>
            
            <div className="my-8">
              <p className="text-3xl md:text-4xl lg:text-5xl  font-dosis text-red-500 font-bold mb-8">
                ABSOLUTELY 77% OFF
              </p>
              
              <div className="space-y-4 mb-8">
                <p className="text-xl md:text-2xl lg:text-3xl font-dosis font-extrabold underline decoration-2 text-yellow-300">
                  Guaranteed* lowest prices in the nation or will pay double the difference.
                </p>
                <p className="text-lg md:text-xl font-dosis">
                  GLC WILL BEAT ALL ONLINE AND DEPARTMENT STORES, COAST TO COAST
                </p>
                <p className="text-lg md:text-xl font-dosis">
                  Selling out to the bare walls, Time is running out....
                </p>
                <p className="text-lg md:text-xl font-dosis">
                  RESERVATIONS RECOMMENDED 1-888-900-4GLC (452)
                </p>
                <p className="text-lg md:text-xl font-dosis">
                  Every item comes with a certificate of authenticity
                </p>
              </div>
              
              <p className="text-xl md:text-2xl font-dosis text-red-500 font-bold mb-8">
                LARGEST ONE-OF-A-KIND INVENTORY IN AMERICA.. BEING LIQUIDATED AT 23 CENTS ON A DOLLAR
              </p>
            </div>
            
            <div className="flex justify-center">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white text-lg py-3 px-6">
                  CONTACT US FOR MORE DETAILS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair text-center mb-8">
              Don&apos;t Miss This Once-in-a-Lifetime Opportunity
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-playfair text-primary mb-4">What&apos;s Available</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Exquisite Persian and Oriental rugs at unbeatable prices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Fine art from renowned artists and prestigious collections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Antique furniture and decorative pieces from around the world</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Collectibles and one-of-a-kind treasures</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-playfair text-primary mb-4">Why Shop Now</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>77% off everything - prices will never be this low again</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Double the difference guarantee on any competitor&apos;s price</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Certificate of authenticity with every purchase</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Final days - once inventory is gone, these opportunities are gone forever</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm">
              <p>*Must provide proof in writing from any competitor for the identical piece within 48 hours from the purchase date otherwise guarantee won&apos;t apply. Offer not subject to prior sales. Not responsible for typographical errors.</p>
            </div>
          </div>
        </div>
      </section>

      <Locations 
        title="Visit Our Locations Today"
        className="mt-0"
      />

      <DiscoverBanner
        text="Don&apos;t Wait - These Incredible Offers Won&apos;t Last!"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}