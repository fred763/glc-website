// src/components/rugs/RugVideos.jsx
const RugVideos = () => {
    return (
      <div className="py-16">
        <h2 className="font-playfair font-bold text-3xl md:text-4xl text-center mb-12">
          We Are the Experts. Contact Us to Buy, Sell, & Learn
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/tX7hlmcH59g"
                title="Oriental Rugs So Popular"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/GQTms2wQq70"
                title="Learn About Rugs"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RugVideos;