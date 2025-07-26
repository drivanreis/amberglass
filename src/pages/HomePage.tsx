// src/pages/HomePage.tsx

import React from 'react';
import HeroSection from '../sections/HeroSection/HeroSection'; // Vamos criar essa seção em breve

const HomePage: React.FC = () => {
  return (
    <>
      <h2>Bem-vindo ao meu Portfólio!</h2>
      <p>Esta é a página inicial da sua aplicação.</p>
      <HeroSection /> {/* Exemplo de como uma Section será usada */}
    </>
  );
};

export default HomePage;