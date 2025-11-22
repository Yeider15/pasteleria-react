import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    // 💡 CORRECCIÓN: Vitest ahora cargará src/tests/setup.js antes de ejecutar los tests.
    setupFiles: './src/tests/setup.js', 
  }
})