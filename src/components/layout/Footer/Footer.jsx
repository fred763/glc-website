// src/components/layout/Footer/Footer.jsx

"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, subscriptionType: 'auctions' })
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank you for subscribing to our auction updates!');
        setEmail('');
      } else {
        toast.error(data.message || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#474747] text-white flex flex-col">
      <div className="container mx-auto px-4 py-6 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Column 1: Contact */}
          <div className="flex flex-col">
            <h2 className="font-playfair text-xl mb-3">Contact Us</h2>
            <p className="font-dosis text-sm mb-2">
              Feel free to contact us at any time with questions or inquiries.
            </p>
            <a
              href="mailto:info@GLCAuctions.com"
              className="font-dosis text-sm hover:text-white mb-4"
            >
              info@GLCAuctions.com
            </a>

            <div className="mt-1 mb-4">
              <h3 className="font-karla text-base mb-1">For Reservations</h3>
              <a href="tel:1-888-900-4452" className="text-white font-bold text-base">
                +1-888-900-4452
              </a>
            </div>
          </div>

          {/* Column 2: Newsletter */}
          <div className="flex flex-col">
            <h2 className="font-playfair text-xl mb-3">Stay Updated</h2>
            <p className="font-dosis text-sm mb-3">
              Keep me informed of future auctions and events
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center mb-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="px-3 py-1.5 bg-gray-700 text-white placeholder-gray-400 rounded-l w-full focus:outline-none focus:ring-1 focus:ring-[#cc5803] text-sm"
                required
              />
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#cc5803] text-white font-dosis px-3 py-1.5 rounded-r hover:bg-[#b54e03] transition-colors disabled:opacity-50 text-sm"
              >
                {submitting ? '...' : 'GO'}
              </button>
            </form>
          </div>

          {/* Column 3: Locations */}
          <div className="flex flex-col">
            <h2 className="font-playfair text-xl mb-3">Pasadena</h2>
            <h3 className="font-karla text-base mb-1">Global Liquidation Company</h3>
            <p className="font-dosis text-sm">Art | Antiques | Rugs | Auctions</p>
            <Link
              href="https://maps.google.com/?q=80+N+Lake+Ave+Pasadena+CA+91101"
              className="text-primary hover:underline block mb-1 text-sm"
            >
              80 N Lake Ave,
              Pasadena, CA 91101
            </Link>
            <p className="mb-1 text-sm">
              Call{" "}
              <a href="tel:626-744-0404" className="text-white">
                626-744-0404
              </a>
            </p>
            <p className="font-dosis mb-1 text-sm">Reservation Required</p>

          </div>

          {/* Column 4: Second Location */}
          <div className="flex flex-col">
            <h2 className="font-playfair text-xl mb-3">San Clemente</h2>
            <h3 className="font-karla text-base mb-1">GLC Rug Outlet</h3>
            <p className="font-dosis text-sm">Largest Rug Collection in America</p>
            <Link
              href="https://maps.google.com/?q=43+Via+Pico+Plaza+San+Clemente+CA+92672"
              className="text-primary hover:underline block mb-1 text-sm"
            >
              43 Via Pico Plaza,
              San Clemente, CA 92672
            </Link>
            <p className="mb-1 text-sm">
              Call{" "}
              <a href="tel:949-364-6425" className="text-white">
                949-364-6425
              </a>
            </p>
            <p className="font-dosis text-sm">Reservation Recommended</p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-4 pt-3 border-t border-gray-700">
          <div className="flex flex-wrap justify-center gap-x-1 md:gap-x-3 gap-y-1 text-center">
            <Link href="/" className="font-dosis text-sm hover:text-white">Home</Link>
            <span className="text-gray-500">|</span>
            <Link href="/liquidations" className="font-dosis text-sm hover:text-white">Liquidations</Link>
            <span className="text-gray-500">|</span>
            <Link href="/auctions" className="font-dosis text-sm hover:text-white">Auctions</Link>
            <span className="text-gray-500">|</span>
            <Link href="/rugs" className="font-dosis text-sm hover:text-white">RARE RUGS</Link>
            <span className="text-gray-500">|</span>
            <Link href="/art-antiques" className="font-dosis text-sm hover:text-white">Art & Antiques</Link>
            <span className="text-gray-500">|</span>
            <Link href="/locations" className="font-dosis text-sm hover:text-white">Locations</Link>
            <span className="text-gray-500">|</span>
            <Link href="/about" className="font-dosis text-sm hover:text-white">About Us</Link>
            <span className="text-gray-500">|</span>
            <Link href="/contact" className="font-dosis text-sm hover:text-white">Contact Us</Link>
            <span className="text-gray-500">|</span>
            <Link href="/privacy-policy" className="font-dosis text-sm hover:text-white">Privacy Policy</Link>
            <span className="text-gray-500">|</span>
            <Link href="/legal" className="font-dosis text-sm hover:text-white">Legal &amp; Disclaimer</Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-2">
        <div className="container mx-auto px-4 text-center">
        <p className="font-dosis text-xs text-gray-400">

          Global Liquidation Company is NOT going out of business or downsizing! In fact, we are growing faster than we anticipated.
          We are closing both of our locations, moving our famous private collections to a new mega location, and consolidating our shops. After nearly three decades, we are closing our two Pasadena shops. The new address and additional details will be announced to the general public soon!
</p>
          <p className="font-dosis text-xs text-gray-400">
            © 2025 Global Liquidation Company. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Button with Indicator */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-2">
        <span className="bg-green-500 text-white text-sm font-bold px-3 py-2 rounded-md shadow-md animate-bounce">
          Click here to Chat
        </span>
        <a
          href="https://wa.me/13106666455"
          className="relative"
          aria-label="Contact us on WhatsApp"
        >
          <Image
            src="/images/whatsapp48.png"
            alt="WhatsApp"
            width={48}
            height={48}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;