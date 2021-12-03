import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import useVants from '@/utils/vant'
import globalProperties from '@/utils/globalProperties'
import './assets/styles/global.less'


const app = createApp(App)


// 配置插件
useVants(app)

// 添加全局方法
globalProperties(app)

app.use(createPinia()).use(router)
app.mount('#app')
