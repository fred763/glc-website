// src/components/contact/LocationDetails.jsx

import React from 'react';
// import Image from 'next/image';

const LocationDetails = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Pasadena Location */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl mb-8">
            Global Liquidation Company
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <p className="font-dosis">                 80 N Lake Ave, 
                Pasadena, CA 91101</p>
                <p className="font-dosis mt-2">📞 626-744-0404</p>
              </div>
              <div className="space-y-1">
                <p className="font-dosis">Monday: 11:00 AM - 6:00 PM</p>
                <p className="font-dosis">Tuesday: 11:00 AM - 6:00 PM</p>
                <p className="font-dosis">Wednesday: (Open to Designers &amp; Dealers)</p>
                <p className="font-dosis">Thursday: 11:00 AM - 6:00 PM</p>
                <p className="font-dosis">Friday: 11:00 AM - 6:00 PM</p>
                <p className="font-dosis">Saturday: 11:00 AM - 6:00 PM</p>
                <p className="font-dosis">Sunday: 11:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div className="relative aspect-video">
            <iframe 
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13207.821091599699!2d-118.131972!3d34.1474864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c37a78abdf41%3A0xd5a1bc92057f1df3!2sGlobal%20Liquidation%20Company!5e0!3m2!1sen!2sin!4v1741955299477!5m2!1sen!2sin"
  className="w-full h-full border-0"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
            </div>
          </div>
        </div>

        {/* San Clemente Location */}
        <div>
          <h2 className="font-playfair text-3xl mb-8">
            GLC Rug Outlet
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <p className="font-dosis">                  43 Via Pico Plaza, 
                San Clemente, CA 92672</p>
                <p className="font-dosis mt-2">📞 949-364-6425</p>
              </div>
              <div className="space-y-1">
                <p className="font-dosis">Monday: 10:00 AM - 6:00 PM</p>
                <p className="font-dosis">Tuesday: 10:00 AM - 6:00 PM</p>
                <p className="font-dosis">Wednesday: 10:00 AM - 6:00 PM</p>
                <p className="font-dosis">Thursday: 10:00 AM - 6:00 PM</p>
                <p className="font-dosis">Friday: 10:00 AM - 6:00 PM</p>
                <p className="font-dosis">Saturday: 10:00 AM - 6:00 PM</p>
                <p className="font-dosis">Sunday: (Open to Designers &amp; Dealers)</p>
              </div>
            </div>
            <div className="relative aspect-video">
            <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5180840965913!2d-117.62174772367842!3d33.43580637339537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf55637077543%3A0xa4c1d6a26e79e6ea!2sGlobal%20Liquidation%20Company!5e0!3m2!1sen!2sin!4v1741955884701!5m2!1sen!2sin"
  className="w-full h-full border-0"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
