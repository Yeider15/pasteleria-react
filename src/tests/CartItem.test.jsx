// src/tests/CartItem.test.jsx
import { render, screen } from '@testing-library/react'; 
import { vi, describe, it, expect } from 'vitest'; 
import CartItem from '../components/CartItem'; 
import '@testing-library/jest-dom'; 

describe('CartItem - Test de Renderizado Básico', () => {
  
  const mockItem = { 
    id_producto: 'TC001', 
    nombre: 'Torta de Chocolate', 
    precio: 45000, 
    cantidad: 2 
  };
  const mockOnRemove = vi.fn(); 

  // 1 Test  Verifica que el nombre del producto y la cantidad se muestren.
  it(' Debe mostrar el nombre y la cantidad del producto', () => {
    // Aquí es donde ocurría el error, ahora 'render' está importado correctamente
    render(<CartItem item={mockItem} onRemove={mockOnRemove} />);
    
    // Verifica que el nombre esté visible
    expect(screen.getByText(/Torta de Chocolate/i)).toBeInTheDocument();
    
    // Verifica que la cantidad 'x 2' esté visible
    expect(screen.getByText(/x 2/i)).toBeInTheDocument();
  });
});