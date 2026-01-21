// src/components/shared/DiscoverBanner.jsx
import React from 'react';
import PropTypes from 'prop-types';

const heightClasses = {
  sm: 'h-48 md:h-64',
  md: 'h-64 md:h-80',
  lg: 'h-80 md:h-96'
};

const DiscoverBanner = ({ 
  text,
  backgroundImage,
  className,
  height
}) => {
  return (
    <div className={`relative ${heightClasses[height]} overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative h-full flex items-center justify-center px-4">
        <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl text-center text-white max-w-4xl mx-auto leading-relaxed">
          {text}
        </h2>
      </div>
    </div>
  );
};

DiscoverBanner.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.oneOf(['sm', 'md', 'lg'])
};

DiscoverBanner.defaultProps = {
  backgroundImage: "/images/home/discover-bg.jpg",
  className: "",
  height: "md"
};

export default DiscoverBanner;