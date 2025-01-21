import './App.css'
import Citacao from './assets/components/Citacao';
import citacoes from './assets/data';

import { useState } from 'react';

function App() {

  const [indice, setIndice] = useState(0);

  const proximaCitacao = () => {
    setIndice((indiceAtual) => (indiceAtual + 1) % citacoes.length);
  };

  return (
    <div className="container mt-5">
      <Citacao texto={citacoes[indice].texto} autor={citacoes[indice].autor} />
      <button className="btn btn-sucess mt-2" onClick={proximaCitacao}>Proxima Citação</button>
    </div>
  )
}

export default App
