import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: Image[];
  autoplay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
}

const ImageCarousel = ({
  images,
  autoplay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className = '',
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const next = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);
  
  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);
  
  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      next();
    }, interval);
    
    return () => {
      clearInterval(timer);
    };
  }, [autoplay, interval, next]);
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-full"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {showArrows && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          
          <button
            onClick={next}
            className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </>
      )}
      
      {showDots && (
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex items-center justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-white'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;