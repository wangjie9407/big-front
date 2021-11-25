import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import useVants from '@/utils/vant'

const app = createApp(App)

useVants(app)

app.use(store)
   .use(router)
app.mount('#app')
