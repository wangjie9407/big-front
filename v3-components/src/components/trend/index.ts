import { App } from 'vue'
import MyTrend from './index.vue'

export default {
    install(app: App){
        app.component('MyTrend', MyTrend)
    }
}