import Hero from '@/components/shared/Hero';
import AuctionRegistrationForm from '@/components/auctions/AuctionRegistrationForm';
import DiscoverBanner from '@/components/shared/DiscoverBanner';

export default function AuctionRegistrationPage() {
  return (
    <main>
      <Hero
        title="Register for Future Auctions"
        backgroundImage="/images/hero-bg.jpg"
        height="lg"
      />
      
      <div className="py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            Be First in Line for Exclusive Auctions
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Join our auction notification list to receive advance notice of upcoming events, private viewings, and special collections. 
            Our auctions feature rare finds, antiques, fine art, Persian rugs, and unique collectibles from estates and private collections.
            By registering, you&apos;ll gain priority access to catalog previews and early bidding opportunities.
          </p>
        </div>
      </div>
      
      <AuctionRegistrationForm />

      <DiscoverBanner
        text="Visit One of Our Locations Today"
        backgroundImage="/images/discover-bg.jpg"
        className="mt-0"
      />
    </main>
  );
}