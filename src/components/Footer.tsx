// src/components/Footer.tsx

import React from 'react';
// import './Footer.css'; // Descomente se for ter estilos específicos para o Footer

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#e0e0e0', textAlign: 'center', marginTop: '20px' }}>
      <p>&copy; 2025 Amberglass. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;