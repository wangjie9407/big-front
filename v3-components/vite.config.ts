import { defineConfig } from 'vite'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve:{
    alias:{
      '@': resolve(__dirname, 'src')
    }
  }
})
