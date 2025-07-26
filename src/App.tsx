// src/App.tsx
import './App.css'; // Vamos manter esse arquivo por enquanto, mas limpo

function App() {
  return (
    <>
      {/* Header Component - Será criado em breve */}
      <header style={{ padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
        <h1>Header placeholder</h1>
        {/* Aqui virá o componente Header */}
      </header>

      {/* Main Content Area - Onde as sections e o conteúdo específico da página irão */}
      <main style={{ minHeight: 'calc(100vh - 120px)', padding: '20px' }}>
        <h2>Main Content Area</h2>
        <p>Este é o conteúdo principal que mudará por página.</p>
        {/* Aqui virão as Sections ou o conteúdo da página atual */}
      </main>

      {/* Footer Component - Será criado em breve */}
      <footer style={{ padding: '20px', backgroundColor: '#e0e0e0', textAlign: 'center' }}>
        <p>&copy; 2025 Seu Nome. Todos os direitos reservados.</p>
        {/* Aqui virá o componente Footer */}
      </footer>
    </>
  );
}

export default App;