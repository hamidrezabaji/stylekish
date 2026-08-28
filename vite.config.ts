import { defineConfig } from 'vite';
import { resolve } from 'path';
import { copyFileSync, mkdirSync } from 'fs';

export default defineConfig({
  plugins: [
    {
      name: 'copy-static-js',
      closeBundle() {
        const outputDir = resolve(__dirname, 'dist/assets/js');

        mkdirSync(outputDir, { recursive: true });

        copyFileSync(
          resolve(__dirname, 'assets/js/app.js'),
          resolve(outputDir, 'app.js')
        );

        copyFileSync(
          resolve(__dirname, 'assets/js/products-data.js'),
          resolve(outputDir, 'products-data.js')
        );
      },
    },
  ],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        products: resolve(__dirname, 'products.html'),
        productDetail: resolve(__dirname, 'product-detail.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
      },
    },
  },

  server: {
    port: 5173,
  },
});