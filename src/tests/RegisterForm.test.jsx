// src/tests/RegisterForm.test.jsx
import { render, screen } from '@testing-library/react'; 
import { vi, describe, it, expect } from 'vitest'; 
import RegistroForm from '../components/RegisterForm'; 
import '@testing-library/jest-dom'; 

// Mock de la función alert
global.alert = vi.fn();

describe('RegisterForm - Tests Mínimos', () => {

  // 2 Test  Verifica que el botón principal exista.
  it('7. Debe renderizar el botón "Registrarse"', () => {
    render(<RegistroForm />);
    expect(screen.getByRole('button', { name: /Registrarse/i })).toBeInTheDocument();
  });

  // 3Test Verifica que el campo "Nombre Completo" esté presente.
  it(' Debe mostrar el campo de Nombre Completo', () => {
    render(<RegistroForm />);
    // Buscamos por la etiqueta (label) "Nombre Completo"
    expect(screen.getByLabelText(/Nombre Completo/i)).toBeInTheDocument();
  });
});