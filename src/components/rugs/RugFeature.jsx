// src/components/rugs/RugFeature.jsx
import Image from 'next/image';

const RugFeature = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <Image
          src="/images/home/btn1.jpg"
          alt="Customer browsing our rug collection"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <p className="text-lg leading-relaxed">
          At <span className="text-primary">Global Liquidation Company</span>, we understand that a rug is not just a 
          decorative piece but an investment that holds sentimental value. That&apos;s why 
          we have dedicated ourselves to sourcing the most unique and captivating 
          rugs from around the world. Our team has traveled far and wide to handpick 
          each rug, ensuring that they embody the rich heritage and artistry of their 
          origin.
        </p>
      </div>
    </div>
  );
};

export default RugFeature;