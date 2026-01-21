// src/components/location/LocationContent.jsx

import React from 'react';

const LocationContent = ({ 
  title, 
  virtualTourUrl, 
  mapUrl,
  address,
  phone 
}) => {
  return (
    <>
      {/* Virtual Tour Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">
            Virtual Tour
          </h2>
          <div className="w-full aspect-[16/9]">
            <iframe 
              src={virtualTourUrl}
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Location Title & Map Section */}
      <div className="bg-background-dark text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">
            {title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="w-full aspect-[4/3]">
                <iframe 
                  src={mapUrl}
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="font-dosis text-lg space-y-4">
                <p>{address}</p>
                <p>Phone: {phone}</p>
                <p className="mt-6">Hours of Operation:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Monday - Saturday: 10:00 AM - 6:00 PM</li>
                  <li>Sunday: 11:00 AM - 5:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationContent;