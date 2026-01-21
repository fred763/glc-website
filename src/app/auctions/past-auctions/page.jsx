// src/app/auctions/past-auctions/page.jsx
import Hero from '@/components/shared/Hero';
import PastAuctionsGalleryGrid from '@/components/auctions/PastAuctionsGalleryGrid';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export const metadata = {
  title: 'Past Auctions | Global Liquidation Company',
  description: 'View our archive of past auctions featuring rare antiques, fine art, handmade rugs, and collectibles.',
};

export default function PastAuctionsPage() {
  return (
    <main>
      <Hero
        title="Past Auctions"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <div className="bg-background-dark py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl text-white text-center mb-8">
            Previous Auction Events
          </h2>
          <p className="text-white text-center max-w-4xl mx-auto mb-12">
            Browse through our past auction events featuring unique treasures from estates, collections, and liquidations. 
            Each auction showcases a carefully curated selection of fine art, antiques, rare rugs, and collectibles.
          </p>
          
          {/* List of past auctions with dates could go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: "Spring 2025 Estate Auction", 
                date: "March 15, 2025",
                description: "Featuring items from the collection of a prominent Pasadena estate."
              },
              { 
                title: "Fine Art & Antiques Auction", 
                date: "February 22, 2025",
                description: "A curated selection of museum-quality paintings and antique furniture."
              },
              { 
                title: "Winter Holiday Auction", 
                date: "December 12, 2024",
                description: "Seasonal collectibles and gift-worthy treasures from around the world."
              },
              { 
                title: "Rare Rug Collection Auction", 
                date: "November 8, 2024",
                description: "Featuring Persian, Turkish, and Oriental rugs from private collections."
              },
              { 
                title: "Autumn Estates Auction", 
                date: "October 18, 2024",
                description: "Featuring items from multiple Southern California estates."
              },
              { 
                title: "Summer Liquidation Auction", 
                date: "August 24, 2024",
                description: "A diverse collection of items at exceptional auction values."
              }
            ].map((auction, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl mb-2 text-primary">{auction.title}</h3>
                <p className="text-gray-500 mb-3">{auction.date}</p>
                <p className="text-gray-700">{auction.description}</p>
                <a 
                  href="/auctions/gallery" 
                  className="inline-block mt-4 text-primary hover:text-primary/80 font-semibold"
                >
                  View Gallery
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="/auctions/gallery" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Browse All Auction Items
            </a>
          </div>
        </div>
      </div>

      <DiscoverBanner
        text="Join Our Next Auction Event"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}