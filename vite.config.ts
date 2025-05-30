import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cv/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@constants': `${path.resolve(__dirname, './src/common/constants/')}`,
      '@utils': `${path.resolve(__dirname, './src/common/utils/')}`,
      '@core': `${path.resolve(__dirname, './src/core/')}`,
      '@public': `${path.resolve(__dirname, './public/')}`,
      '@pages': path.resolve(__dirname, './src/pages'),
      '@types': `${path.resolve(__dirname, './src/types')}`,
    },
  },
});
