// src/components/shared/Hero2.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Hero2 = ({
  title,
  description,
  ctaText,
  ctaLink,
  bgColor,
  textColor,
  className
}) => {
  return (
    <div className={`py-16 ${bgColor} ${textColor} text-center ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl mb-8 max-w-4xl mx-auto">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-lg max-w-4xl mx-auto leading-relaxed mb-8">
            {description}
          </p>
        )}
        <a
          href={ctaLink}
          className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

Hero2.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string
};

Hero2.defaultProps = {
  ctaText: "CONTACT US",
  ctaLink: "/contact",
  bgColor: "bg-background-dark",
  textColor: "text-white",
  className: ""
};

export default Hero2;