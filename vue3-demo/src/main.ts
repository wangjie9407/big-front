import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// 引入vant组件
import { Form, Field, CellGroup } from 'vant';

const app = createApp(App)

app.use(Form)
    .use(Field)
    .use(CellGroup)

app.use(store)
app.mount('#app')
