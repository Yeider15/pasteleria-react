import React from 'react';
import '../styles/about-page.css';

function NosotrosPage() {
  return (
    <div className="nosotros-container">
      
      
      <div className="registro-header">
        <img src="/assets/img/pastel1.png" alt="Logo Pastelería" id="logo2" />
        <h1>Nosotros</h1>
      </div>

      
      <div className="card shadow p-4">
        <p><strong>Pastelería Mil Sabores</strong> celebra su <strong>50 aniversario</strong> como un referente en la repostería chilena. 
        Famosa por su participación en un <strong>récord Guinness en 1995</strong>, cuando colaboró en la creación de la torta más grande del mundo, 
        la pastelería busca renovar su sistema de ventas online para ofrecer una experiencia de compra moderna y accesible.</p>

        <h3 className="mt-4">Misión</h3>
        <p>Ofrecer una experiencia dulce y memorable a nuestros clientes, proporcionando tortas y productos de repostería de alta calidad 
        para todas las ocasiones, mientras celebramos nuestras raíces históricas.</p>

        <h3 className="mt-4">Visión</h3>
        <p>Convertirnos en la tienda online líder de productos de repostería en Chile, conocida por nuestra innovación, calidad y el impacto positivo 
        en la comunidad.</p>
      </div>

      
      <div className="imagenes-nosotros">
        <img src="/assets/img/nosotro1.jpg" alt="Torta aniversario" />
        <img src="/assets/img/nosotros2.jpg" alt="Equipo de pastelería" />
      </div>
    </div>
  );
}

export default NosotrosPage;
