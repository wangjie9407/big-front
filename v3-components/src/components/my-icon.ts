import { Icons } from "@/assets/const/icons";
import {App} from 'vue'


export default function createMyIconComponent(app: App<Element>){
    Object.values(Icons).forEach(icon => {
        app.component(`my-icon-${icon.name}`, icon)
    })
}