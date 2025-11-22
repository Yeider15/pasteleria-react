// src/tests/Navbar.test.jsx
import { render, screen } from '@testing-library/react'; 
import { vi, describe, it, expect } from 'vitest';
import Navbar from '../components/Navbar'; 

// Siempre mockear useLocation y Link para que Navbar funcione en el entorno de test.
const mockUseLocation = vi.fn().mockReturnValue({ pathname: '/productos' }); 
vi.mock('react-router-dom', () => ({
  useLocation: () => mockUseLocation(),
  Link: ({ children }) => <a>{children}</a>, 
}));

describe('Navbar - Tests Mínimos', () => {
  
  // 6 Test  Verifica que la marca de la pastelería se muestre.
  it(' Debe mostrar el título principal de la pastelería', () => {
    render(<Navbar />);
    expect(screen.getByText(/Pastelería Mil Sabores/i)).toBeInTheDocument();
  });

  // 7Test  Verifica que el enlace "Registrarse" esté visible.
  it(' Debe mostrar el enlace "Registrarse"', () => {
    render(<Navbar />);
    expect(screen.getByText('Registrarse')).toBeInTheDocument();
  });
});