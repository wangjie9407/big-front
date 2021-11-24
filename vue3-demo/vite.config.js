import { defineConfig } from 'vite'
import {resolve} from 'path' 
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve:{
    alias:{
      "@": resolve(__dirname, "/src"),
    }
  },
})
