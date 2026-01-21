// src/components/locations/VirtualTour.jsx
const tours = [
    {
      id: 3,
      title: "Pasadena Outlet Virtual Tour",
      embedUrl: "https://www.google.com/maps/embed?pb=!4v1689171834016!6m8!1m7!1sCAoSLEFGMVFpcE5saTZIV3BoRU5GOWFQbFdUeTU0OW90TjlZajhEeGRxR2ZDMkxD!2m2!1d34.147711744951!2d-118.13197858294!3f201.55!4f-10.819999999999993!5f0.4000000000000002"
    },
    {
      id: 4,
      title: "San Clemente Outlet Virtual Tour",
      embedUrl: "https://www.google.com/maps/embed?pb=!4v1683241789858!6m8!1m7!1sCAoSLEFGMVFpcFByUlBnSkVHcmZ4eWtoenRzZWk2UDlObTU3dlc4RVdzUGtYWWVR!2m2!1d33.435865325594!2d-117.61917362337!3f172.2!4f-7.760000000000005!5f0.4629694304036984"
    }
  ];
  
  export default function VirtualTour() {
    return (
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="aspect-video">
                <h3 className="text-2xl font-playfair mb-4">{tour.title}</h3>
                <iframe 
                  src={tour.embedUrl}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }