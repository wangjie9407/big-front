import {createRouter, createWebHashHistory } from 'vue-router'

const files = require.cotext('../router')
console.log(files)

export default {
    history: createWebHashHistory(),
    routes:[]
}