import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#8D6E63', color: '#FFF8E1', textAlign: 'center', padding: '20px' }}>
      <p style={{ margin: 0, fontSize: '16px' }}>© 2025 Pastelería Mil Sabores - Todos los derechos reservados 🧁🧁</p>
      <p style={{ margin: '5px 0' }}>
        <a href="#" style={{ color: '#FFF8E1', textDecoration: 'underline' }}>Política de Privacidad</a> |
        <a href="#" style={{ color: '#FFF8E1', textDecoration: 'underline' }}>Términos y Condiciones</a>
      </p>
    </footer>
  );
}

export default Footer;
