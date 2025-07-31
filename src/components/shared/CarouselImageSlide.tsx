// File: src/components/shared/CarouselImageSlide.tsx

import React from 'react';

interface CarouselImageSlideProps {
  src: string;
  alt: string;
  isActive: boolean; // Indica se esta imagem deve estar visível (opacity: 100) ou oculta (opacity: 0)
}

const CarouselImageSlide: React.FC<CarouselImageSlideProps> = ({ src, alt, isActive }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute top-0 left-0 w-full h-full object-cover
        transition transition-opacity duration-1500 ease-in-out
        ${isActive ? 'opacity-100' : 'opacity-0'}
      `}
      style={{ zIndex: isActive ? 2 : 1 }}
    />
  );
};

export default CarouselImageSlide;