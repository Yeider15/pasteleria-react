import React from 'react';
import RegistroForm from '../components/RegisterForm';
import '../styles/register-page.css';

function RegistroPage() {
  return (
    <div className="registro-page-container">
      
      <div className="registro-header">
        <img src="/assets/img/LOGO-PASTELERIA.png" alt="Logo Pasteleria" id="logo2" />
        <h2>Registro de Usuario</h2>
      </div>

     
      <RegistroForm />
    </div>
  );
}

export default RegistroPage;