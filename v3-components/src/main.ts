import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/router/index';
import ElementPlus from 'element-plus'
import './assets/styles/global.less'
import createMyIconComponent from '@/components/my-icon'

const app = createApp(App)

// 全局注册图标组件
createMyIconComponent(app)

app.use(ElementPlus)
.use(Router)
.mount('#app')
