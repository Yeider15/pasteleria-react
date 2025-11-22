//10 src/tests/Footer.test.jsx
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../components/Footer'

test('muestra el texto y enlaces correctos en el footer', () => {
  render(<Footer />)

  // Verifica el texto principal
  expect(
    screen.getByText(/© 2025 Pastelería Mil Sabores - Todos los derechos reservados/i)
  ).toBeInTheDocument()

  // Verifica los enlaces de privacidad y términos
  expect(screen.getByText(/Política de Privacidad/i)).toBeInTheDocument()
  expect(screen.getByText(/Términos y Condiciones/i)).toBeInTheDocument()
})
