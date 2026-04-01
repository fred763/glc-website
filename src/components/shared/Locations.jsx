// src/components/shared/Locations.jsx
import React from 'react';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import PropTypes from 'prop-types';

const Locations = ({ 
  className,
  title
}) => {
  return (
    <div className={`bg-background-light py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-center mb-12 text-gray-800">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* GLC Antiques | Rugs | Auctions */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 mt-1 text-gray-600" />
              <div>
                <h3 className="font-sans text-lg mb-1">GLC Antiques | Rugs | Auctions</h3>
                <Link 
                  href="https://maps.google.com/?q=80+N+Lake+Ave+Pasadena+CA+91101"
                  className="text-primary hover:underline block"
                >
                  80 N Lake Ave<br />
                  Pasadena, CA 91101
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-gray-600" />
              <Link 
                href="tel:626-744-0404"
                className="text-primary hover:underline"
              >
                626-744-0404
              </Link>
            </div>

            <div className="font-sans space-y-1 text-gray-700 mt-4">
              <p>Monday: 10:00 AM - 6:00 PM</p>
              <p>Tuesday: 10:00 AM - 6:00 PM</p>
              <p>Wednesday: (Open to Designers &amp; Dealers)</p>
              <p>Thursday: 10:00 AM - 6:00 PM</p>
              <p>Friday: 10:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 6:00 PM</p>
              <p>Sunday: 11:00 AM - 4:00 PM</p>
            </div>
          </div>

          {/* GLC Rug Outlet */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 mt-1 text-gray-600" />
              <div>
                <h3 className="font-sans text-lg mb-1">GLC Rug Outlet</h3>
                <Link 
                  href="https://maps.google.com/?q=43+Via+Pico+Plaza+San+Clemente+CA+92672"
                  className="text-primary hover:underline block"
                >
                  43 Via Pico Plaza<br />
                  San Clemente, CA 92672
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-gray-600" />
              <Link 
                href="tel:949-364-6425"
                className="text-primary hover:underline"
              >
                949-364-6425
              </Link>
            </div>

            <div className="font-sans space-y-1 text-gray-700 mt-4">
              <p>Monday: 11:00 AM - 6:00 PM</p>
              <p>Tuesday: 11:00 AM - 6:00 PM</p>
              <p>Wednesday: 11:00 AM - 6:00 PM</p>
              <p>Thursday: 11:00 AM - 6:00 PM</p>
              <p>Friday: 11:00 AM - 6:00 PM</p>
              <p>Saturday: 11:00 AM - 6:00 PM</p>
              <p>Sunday: (Open to Designers &amp; Dealers)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Locations.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
};

Locations.defaultProps = {
  className: "",
  title: "Locations for Your Convenience"
};

export default Locations;
