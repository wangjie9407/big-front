import { Icons } from "@/assets/const/icons";
import {App} from 'vue'


export default {
    install(app: App){
        Object.values(Icons).forEach(icon => {
            app.component(`my-icon-${icon.name}`, icon)
        })
    }
}