// src/tests/Pages.test.jsx
import { render, screen } from '@testing-library/react'; 
import { vi, describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import ContactPage from '../pages/ContactPage'; 

// Mockear las dependencias de las páginas para que no fallen.
vi.mock('../components/ContactForm', () => ({ default: () => <div>Formulario</div> }));

// Mockear imágenes de ContactPage
vi.mock('../assets/img/pastel1.png', () => ({ default: 'logo.png' }));
vi.mock('../assets/img/Instagram_icon.png', () => ({ default: 'instagram.png' }));
vi.mock('../assets/img/Facebook_f_logo_(2019).svg.png', () => ({ default: 'facebook.png' }));



describe('Pages - Tests Mínimos', () => {

  // 4Test  Verifica el título de la página.
  it(' ContactPage: Debe mostrar el título "Contáctanos"', () => {
    render(<ContactPage />);
    expect(screen.getByRole('heading', { name: /Contáctanos/i, level: 2 })).toBeInTheDocument();
  });

  
});