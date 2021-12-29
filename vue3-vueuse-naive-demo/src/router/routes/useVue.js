export default [
    {
        path:'/',
        component: () => import('@/App.vue'),
    },
    {
        path:'/use-active-element',
        component: () => import('@/views/VueUse/useActiveElement.vue'),
        meta:{
            title: 'useActiveElement 代码分析'
        }
    }
]