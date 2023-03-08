import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from 'vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    // commonjs(/* options */),
  ],
  // optimizeDeps: {
  //   include: ['generation'],
  // },
  // build: {
  //   commonjsOptions: {
  //     include: [/generation/, /node_modules/],
  //   },
  // },
})
