import { defineConfig } from 'vite';

export default defineConfig({
  // Base URL para GitHub Pages
  base: '/04.Tarea-entregable-4-Portfolio/',
  
  // Servidor de desarrollo
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  // Configuración de build para producción
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['./js/app.js']
        }
      }
    }
  },
  
  // Configuración de CSS/Sass
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  }
});
