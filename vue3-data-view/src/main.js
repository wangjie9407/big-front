import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import router from '@/router/index.js'
import '@/assets/styles/global.less'

createApp(App).use(naive).use(router).mount('#app')
