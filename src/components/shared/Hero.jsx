// src/components/shared/Hero.jsx
import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const heightClasses = {
  sm: 'h-48',
  md: 'h-64',
  lg: 'h-96'
};

const Hero = ({
  title,
  backgroundImage,
  height,
  overlay
}) => {
  return (
    <div className={`relative ${heightClasses[height]} w-full overflow-hidden mt-20`}>
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      {overlay === 'pattern' && (
        <div
          className="absolute inset-0 bg-repeat opacity-50"
          style={{
            backgroundImage: 'url("/images/pattern-overlay.png")',
            backgroundSize: '200px'
          }}
        />
      )}
      {overlay === 'dark' && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white">
          {title}
        </h1>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  height: PropTypes.oneOf(['sm', 'md', 'lg']),
  overlay: PropTypes.oneOf(['pattern', 'dark', 'none'])
};

Hero.defaultProps = {
  height: 'md',
  overlay: 'none'
};

export default Hero;