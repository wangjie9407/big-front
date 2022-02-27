import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/router/index';
import ElementPlus from 'element-plus'
import './assets/styles/global.less'
import createMyIconComponent from '@/components/my-icon'
import MyComUI from '@/components'

const app = createApp(App)

app.use(ElementPlus)
.use(MyComUI)
.use(Router)
.mount('#app')
