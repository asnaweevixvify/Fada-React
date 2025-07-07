import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import prerender from 'vite-plugin-prerender'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ['/', '/about'], 
    }),
  ],
})
