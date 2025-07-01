import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      include: ['**/*.tsx', '**/*.ts', '**/*.css']
    })
  ],
  css: {
    modules: false // Отключите CSS-модули для глобальных стилей
  }
})