import {h ,init } from 'snabbdom'

console.log(h)
// 初始化一个模块，返回patch函数
const patch  = init([]) 

const realDom = document.querySelector('#app')
// h函数会返回一个虚拟dom
const vnode = h('div#box.cls', 'world')

// patch函数接受两个参数，第一个是真实dom，第二个是虚拟dom，对比后将新的内容更新到真实dom
patch(realDom, vnode);