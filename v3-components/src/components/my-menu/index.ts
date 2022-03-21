import MyMenu from './src/index'
import { App} from 'vue'

export default {
    install(app:App){
        app.component('MyMenu', MyMenu)
    }
}