import React from 'react';
import './Shows.css';

const Shows = () => {
  return (
    <div className="shows-container">
      <h1>Próximos Shows</h1>
      <ul className="show-list">
        <li>
          <strong>Data:</strong> 10/10/2023
          <strong> Local:</strong> São Paulo, SP
          <a href="#buy" className="buy-link">Comprar Ingresso</a>
        </li>
        <li>
          <strong>Data:</strong> 20/10/2023
          <strong> Local:</strong> Rio de Janeiro, RJ
          <a href="#buy" className="buy-link">Comprar Ingresso</a>
        </li>
        
      </ul>
    </div>
  );
};

export default Shows;
