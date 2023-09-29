import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Galeria de Fotos</h1>
      <div className="photo-grid">
        {/* Adicione suas fotos aqui */}
        <div className="photo">
          <img src="caminho-para-sua-foto.jpg" alt="Descrição da Foto" />
          <p>Descrição da Foto 1</p>
        </div>
        <div className="photo">
          <img src="caminho-para-sua-foto.jpg" alt="Descrição da Foto" />
          <p>Descrição da Foto 2</p>
        </div>
        {/* Adicione mais fotos conforme necessário */}
      </div>
    </div>
  );
};

export default Gallery;
