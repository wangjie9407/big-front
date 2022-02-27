import { App } from "vue";
const components = import.meta.globEager('./*/index.ts')

export default {
    install(app: App){
        Object.values(components).forEach(com => {
            app.use(com.default)
        })
    }
}