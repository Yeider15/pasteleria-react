import React from 'react';
import LoginForm from '../components/LoginForm'; 
import '../styles/login-page.css';

function LoginPage() {
  return (
    <div className="login-page-container">
      
      <div className="registro-header">
        <img src="/assets/img/pastel1.png"  alt="Logo Pasteleria" id="logo2" />
        <h2>Inicio de Sesión</h2>
      </div>

      
      <LoginForm />

      <p style={{textAlign: 'center', marginTop: '15px'}}>
        <a href="/registro">¿No tienes cuenta? Regístrate aquí</a>
      </p>
    </div>
  );
}

export default LoginPage;