import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log('Using Vite configuration');  // Add this line

export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':'http://localhost:5000',
    }
  }
  // proxy: {
  //   '/api': {
  //     target: 'http://localhost:5000',
  //     changeOrigin: true,
  //   },
  // },
});
