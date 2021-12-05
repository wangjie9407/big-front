import {createRouter, createWebHashHistory} from 'vue-router'
// import loadFiles from '@/utils/LoadFiles.js'

const path = '../router'
const type = '.js'
let routes = []
// loadFiles(path, type)

export default createRouter({
    history: createWebHashHistory(),
    routes
})