// src/components/home/Testimonials.jsx

"use client"

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "They have one of the best and largest collection in the area. I am so happy I stop by, they know everything about rugs and they are really knowledgeable it couldn't be better than this.",
    author: "Mehrshad A."
  },
  {
    text: "If you are looking for quality pieces, look no further. Rick and his crew are all you will need to get with the perfect set of any pieces. They guide you through all with patience and good heart.",
    author: "David P."
  },
  {
    text: "Beautiful showroom with amazing selection of rugs. The staff was very knowledgeable and helpful in finding the perfect rug for our space. Highly recommend!",
    author: "Sarah M."
  },
  {
    text: "Exceptional service and stunning collection. The team helped us find exactly what we were looking for. A truly wonderful experience from start to finish.",
    author: "Michael R."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#474747] text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair font-bold text-4xl md:text-5xl text-center mb-16">Testimonials</h2>
        
        <div className="relative max-w-4xl mx-auto px-16">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 hover:opacity-75 transition-opacity"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={36} className="text-white" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 hover:opacity-75 transition-opacity"
            aria-label="Next testimonial"
          >
            <ChevronRight size={36} className="text-white" />
          </button>

          {/* Stars */}
          <div className="flex justify-center mb-8">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="fill-yellow-400 text-yellow-400 w-8 h-8 mx-1" 
              />
            ))}
          </div>

          {/* Testimonial Content */}
          <div className="text-center">
            <p className="font-dosis text-xl md:text-2xl mb-8 leading-relaxed">
              {testimonials[currentIndex].text}
            </p>
            <p className="font-dosis text-lg text-gray-300 italic">
              {testimonials[currentIndex].author}
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;