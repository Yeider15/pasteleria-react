import { render, screen } from '@testing-library/react'; 
import { vi, describe, it, expect } from 'vitest';
import LoginForm from '../components/LoginForm';// --- Mocks Esenciales ---
// Mockear useNavigate y alert para que el componente no falle.
vi.mock('react-router-dom', () => ({ useNavigate: vi.fn() }));
global.alert = vi.fn();

describe('LoginForm - Tests Mínimos', () => {
  
  // 8 Test  Verifica que el botón principal exista.
  it(' Debe renderizar el botón "Entrar"', () => {
    render(<LoginForm />);
    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument();
  });

  // 9Test  Verifica que el campo de "Contraseña" esté presente.
  it(' Debe mostrar el campo de Contraseña', () => {
    render(<LoginForm />);
    // Buscamos por la etiqueta (label) "Contraseña"
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument(); 
  });
});