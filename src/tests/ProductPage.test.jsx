import { render, screen } from '@testing-library/react'; 
import { vi, describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';import ProductPage from '../pages/ProductPage'; 


// Mockear las dependencias de las páginas para que no fallen.

vi.mock('../components/ProductCard', () => ({ default: () => <div>Tarjeta Producto</div> }));

// Mockear localStorage (para ProductPage)
Object.defineProperty(window, 'localStorage', { value: { getItem: vi.fn() } });


describe('Pages - Tests Mínimos', () => {

  

  // 5 Test  Verifica el título de la página.
  it(' ProductPage: Debe mostrar el título "PRODUCTOS"', () => {
    render(<ProductPage />);
    expect(screen.getByRole('heading', { name: /PRODUCTOS/i })).toBeInTheDocument();
  });
});