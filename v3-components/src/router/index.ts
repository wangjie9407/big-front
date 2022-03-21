import {createRouter, createWebHashHistory} from 'vue-router'
import { formatGlob} from '@/Utils/useGlobeager'

export default createRouter({
    history: createWebHashHistory(),
    routes: formatGlob(import.meta.globEager('./routes/*.ts'))
})