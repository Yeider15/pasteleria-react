import React from 'react';
import ContactForm from '../components/ContactForm'; 
import '../styles/contact-page.css'; 

function ContactPage() {
  return (
    <div id="contact-page-container">
      
      <div className="registro-header text-center my-4">
        <img src="/assets/img/pastel1.png" alt="Logo Pasteleria" id="logo2" width="120" />
        <h2>Contáctanos</h2>
      </div>

      <ContactForm />

      <div className="custom-container">
        <h3 className="text-center">Información de Contacto</h3>
        <p><strong>Dirección:</strong> Av. Dulzura 1234, Santiago, Chile</p>
        <p><strong>Teléfono:</strong> +56 9 8765 4321</p>
        <p><strong>Email:</strong> contacto@milSabores.cl</p>
        <p><strong>Horario:</strong> Lunes a Sábado - 9:00 a 20:00 hrs</p>

        <div className="redes-sociales text-center">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/img/Instagram_icon.png" alt="Instagram" className="icono-red" />
          </a>

          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/img/Facebook_f_logo_(2019).svg.png" alt="Facebook" className="icono-red" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
