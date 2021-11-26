import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import useVants from '@/utils/vant'
import globalProperties from '@/utils/globalProperties'

const app = createApp(App)


// 配置插件
useVants(app)

// 添加全局方法
globalProperties(app)

app.use(store)
   .use(router)
app.mount('#app')
