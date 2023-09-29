import React from 'react';
import homeImage from '../assets/home.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao nosso site!</h1>
      <img src={homeImage} alt="Imagem da banda" className="home-image" />
      <p>Uma breve descrição sobre a banda e seu estilo único.</p>

      <div className="about-section">
        <h2>Sobre a Banda</h2>
        <p>
          Somos uma banda de heavy metal tradicional inspirada nos anos 80, trazendo o poder e a energia daquela era memorável para o presente.
        </p>
      </div>

      <div className="video-section">
        <h2>Assista ao nosso último show</h2>
        <iframe
          title="band-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SEU_LINK_AQUI"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
