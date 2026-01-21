// src/components/locations/ShowroomInfo.jsx
import Link from 'next/link';

export default function ShowroomInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-8">
          Visit Either of Our Two Showrooms
        </h2>
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-8">
        Please call <Link href="tel:+18889004452" className="text-primary hover:text-primary-dark">+1-888-900-4452</Link> number to make reservations 
        </h2>
        <p className="text-gray-600 font-dosis mb-12 max-w-4xl mx-auto text-center">
          With over 17 million dollars of exquisite inventory, we have the largest selection of Oriental and Persian rugs at the guaranteed lowest prices in the nation. We provide each piece with a certificate of authenticity and offer a lifetime exchange and welcome trade-ins on our private collection.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Global Liquidation Company */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair text-gray-900">Global Liquidation Company</h3>
            <address className="not-italic">
              <Link 
                href="https://goo.gl/maps/VWW7i2d3XoNog2RP8?coh=178573&entry=tt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark block"
              >
                80 N Lake Ave<br />
                Pasadena, CA 91101, USA
              </Link>
            </address>
            
            <div>
              <Link 
                href="tel:626-744-0404"
                className="text-primary hover:text-primary-dark"
              >
                626-744-0404
              </Link>
            </div>

            <div className="space-y-1 font-dosis">
              <p>Monday: 10:00 AM – 6:00 PM</p>
              <p>Tuesday: 10:00 AM – 6:00 PM</p>
              <p>Wednesday: (Open to Designers &amp; Dealers)</p>
              <p>Thursday: 10:00 AM – 6:00 PM</p>
              <p>Friday: 10:00 AM – 6:00 PM</p>
              <p>Saturday: 10:00 AM – 6:00 PM</p>
              <p>Sunday: 11:00 AM – 4:00 PM</p>
            </div>
          </div>

          {/* GLC Rug Outlet */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair text-gray-900">GLC Rug Outlet</h3>
            <address className="not-italic">
              <Link 
                href="https://goo.gl/maps/BYZJg4E6GYHvXqKp8?coh=178573&entry=tt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark block"
              >
                43 Via Pico Plaza<br />
                San Clemente, CA 92672
              </Link>
            </address>
            
            <div>
              <Link 
                href="tel:949-364-6425"
                className="text-primary hover:text-primary-dark"
              >
                949-364-6425
              </Link>
            </div>

            <div className="space-y-1 font-dosis">
              <p>Monday: 10:00 AM – 6:00 PM</p>
              <p>Tuesday: 10:00 AM – 6:00 PM</p>
              <p>Wednesday: 10:00 AM – 6:00 PM</p>
              <p>Thursday: 10:00 AM – 6:00 PM</p>
              <p>Friday: 10:00 AM – 6:00 PM</p>
              <p>Saturday: 10:00 AM – 6:00 PM</p>
              <p>Sunday: (Open to Designers &amp; Dealers)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}