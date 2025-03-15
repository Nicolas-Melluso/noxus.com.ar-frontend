import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist', // Carpeta de salida (reemplaza 'dist' por defecto)
        assetsDir: 'static', // Carpeta para archivos estáticos (CSS, JS, imágenes)
        rollupOptions: {
            input: {
                main: './index.html', // Asegura que index.html sea el punto de entrada
            },
        },
    },
    publicDir: 'public', // Carpeta para archivos públicos (ej: vite.svg)
});
