import {createRouter, createWebHashHistory} from 'vue-router'
import { useImportMeta } from '@/Utils/file'

export default createRouter({
    history: createWebHashHistory(),
    routes: useImportMeta(import.meta.globEager('./routes/*.ts'))
})