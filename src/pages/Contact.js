import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Entre em Contato</h1>
      <p>Tire suas dúvidas, envie sugestões ou apenas diga oi!</p>
      <form className="contact-form">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
