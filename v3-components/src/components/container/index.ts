import { App } from 'vue';
import MyLayout from './src/my-layout/index.vue';
import MyLayoutHeader from './src/my-layout/index.vue';
import MyLayoutNav from './src/my-layout/index.vue';

export default {
    install(app:App){
        app.component('MyLayoutNav',MyLayoutNav)
        app.component('MyLayoutHeader', MyLayoutHeader)
        app.component('MyLayout', MyLayout)
    }
}