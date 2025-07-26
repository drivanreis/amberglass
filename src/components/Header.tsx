// src/components/Header.tsx

import React from 'react';
// import './Header.css'; // Descomente se for ter estilos específicos para o Header

const Header: React.FC = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
      <h1>Meu Portfólio</h1>
      <nav>
        <a href="/">Home</a> | <a href="/about">Sobre</a> | <a href="/contact">Contato</a>
      </nav>
    </header>
  );
};

export default Header;