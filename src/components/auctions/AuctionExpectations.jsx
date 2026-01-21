// src/components/auctions/AuctionExpectations.jsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AuctionExpectations = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/images/auction/rugs.jpg"
            alt="Antique rugs at auction"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-gray-800">
            What to Expect During Our Live Auction Events
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Alongside our liquidation services, we host live public auctions at our 
              showroom as well as private sales.
            </p>
            <p>
              Conducted by our experienced professionals, our world-renowned rugs and 
              antiques are for sale at our auction marketplace. During our live events, the 
              customers will run the bidding by putting bid amounts for each item.
            </p>
            <p>
              The bidding price is based on the value and condition of the sold 
              item. Customers should place their maximum bid before the auction closes 
              and be prepared to bid when the lots begin to close. You stand the best 
              chance at getting the item you want by placing your highest bid in the closing 
              seconds. Bid up to the reserve price as early as possible. Any last-minute bid 
              at the end of the event extends the auction by fifteen minutes. Each item is 
              sold to the highest bidder.
            </p>
            <p>
              Stay updated on our latest auction events and available inventory by{' '}
              <Link href="/contact" className="text-primary hover:underline">
                signing up now
              </Link>{' '}
              to receive our notifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionExpectations;