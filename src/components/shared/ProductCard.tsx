// File: src/components/shared/ProductCard.tsx

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  images: string[];
  alt?: string;
}

const ProductCard = ({
  id,
  title,
  description,
  images,
  alt = '',
}: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 


  useEffect(() => {
    if (images && images.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 12000); // Troca a cada 12 segundos

      return () => clearInterval(intervalId);
    }
  }, [images]);

  
  const currentImage = images?.[currentImageIndex];

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-0 shadow-md h-full flex flex-col">
      <div className="relative overflow-hidden h-64">
        {/* Renderiza a imagem atual do carrossel */}
        {currentImage ? ( // Adiciona uma verificação para garantir que currentImage não seja undefined
          <img
            src={currentImage}
            alt={alt || title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        ) : (
          // Opcional: Um placeholder ou loader se não houver imagem
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            Sem Imagem
          </div>
        )}
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="text-sm text-gray-500">
          {/* Content can be added here if needed */}
        </div>
      </CardContent>

      <CardFooter>
        <NavLink to={`/produtos#${id}`} className="w-full">
          <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50">
            Saiba Mais
          </Button>
        </NavLink>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;