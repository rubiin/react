import { defineConfig, loadEnv } from 'vite';
import { VitePluginFonts } from 'vite-plugin-fonts';
import ViteVisualizer from 'rollup-plugin-visualizer';
import strip from '@rollup/plugin-strip';
import path from 'node:path';
import viteCompression from 'vite-plugin-compression';
import react from '@vitejs/plugin-react-swc';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig(({ mode }) => {
  const isDev = mode === 'dev';
  const isReport = mode === 'report';

  // loads environment variables from .env file and exposes them to process.env
  process.env = { ...process.env, ...loadEnv(mode, './env') };

  const plugin = [
    react(),
    strip(),
    VitePluginFonts({
      google: {
        families: ['Roboto Slab', 'Raleway'],
      },
    }),
    viteCompression({
      algorithm: 'brotliCompress',
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: process.env.VITE_APP_TITLE,
        },
      },
    }),
  ];

  if (isReport) {
    plugin.push(
      /**
       * DESC:
       * visualize bundle
       */
      ViteVisualizer({
        filename: './dist/report.html',
        open: true,
        brotliSize: true,
      }),
    );
  }

  let optimizeDeps = {};
  if (isDev) {
    /**
     * DESC:
     * dependency pre-bundling
     */
    optimizeDeps = {
      include: [
        'react',
        'react-router-dom',
        'zustand',
        'react-query',
        'redaxios',
        'react-hook-form',
        'react-dom',
      ],
    };
  }

  return {
    server: {
      port: +process.env.VITE_APP_PORT || 4000,
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, '/src/components/index'),
        '@types': path.resolve(__dirname, '/src/types'),
        '@store': path.resolve(__dirname, '/src/stores/index'),
        '@utils': path.resolve(__dirname, '/src/utils/index'),
        '@hooks': path.resolve(__dirname, '/src/hooks'),
        '@scss': path.resolve(__dirname, 'src/resources/scss'),
        '@images': path.resolve(__dirname, 'src/resources/images'),
        '@services': path.resolve(__dirname, 'src/services'),
      },
    },
    build: {
      minify: true,
      chunkSizeWarningLimit: 1024,
      sourcemap: false,
    },
    base: process.env.VITE_APP_BASE,
    plugins: plugin,
    optimizeDeps,
    test: {
      include: ['test/**/*.test.ts'],
      environment: 'jsdom',
    },
    deps: {
      inline: [
        'react',
        'react-router-dom',
        'zustand',
        'react-hook-form',
        'react-dom',
        'react-query',
        'redaxios',
      ],
    },
  };
});
