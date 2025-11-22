// src/tests/ProductCard.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import ProductCard from '../components/ProductCard';

// Componente de ayuda para envolver ProductCard con BrowserRouter
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

test('muestra la información del producto y llama a la función al hacer clic en el botón', () => {
 
  const mockAgregarAlCarrito = vi.fn(); // Una función simulada
  const productoDePrueba = {
    idProducto: 5,
    nombre: 'Torta de Chocolate',
    precio: 15000,
    imgSrc: '/imagenes/torta_chocolate.jpg',
  };

  // 2. Renderizar el componente
  renderWithRouter(
    <ProductCard
      {...productoDePrueba}
      agregarAlCarrito={mockAgregarAlCarrito}
    />
  );



  // 4. Verificación de la funcionalidad del botón
  const botonCarrito = screen.getByRole('button', { name: /Agregar al carrito/i });
  fireEvent.click(botonCarrito);

  // Verifica que la función simulada haya sido llamada
  expect(mockAgregarAlCarrito).toHaveBeenCalledTimes(1);
  expect(mockAgregarAlCarrito).toHaveBeenCalledWith(
    productoDePrueba.idProducto,
    productoDePrueba.nombre,
    productoDePrueba.precio
  );
});