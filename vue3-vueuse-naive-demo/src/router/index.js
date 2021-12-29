import loadDir from '@/Utils/loadDir.js'
import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
    history: createWebHashHistory(),
    routes: loadDir(import.meta.globEager('./routes/*.js')),
})