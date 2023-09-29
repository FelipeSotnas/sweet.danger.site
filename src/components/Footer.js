import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="footer-title">Contato</h3>
            <p>Email: banda@email.com</p>
            <p>Telefone: (11) 99999-9999</p>
          </div>
          <div className="col-md-4">
            <h3 className="footer-title">Redes Sociais</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
          <div className="col-md-4">
            <h3 className="footer-title">Links Úteis</h3>
            <p>Próximos Shows</p>
            <p>Galeria de Fotos</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="text-center">Copyright © 2023. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
