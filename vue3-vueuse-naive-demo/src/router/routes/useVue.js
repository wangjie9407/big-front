export default [
    {
        path:'/',
        redirect: '/use-active-element'
    },
    {
        path:'/use-active-element',
        component: () => import('@/views/VueUse/useActiveElement.vue'),
        meta:{
            title: 'useActiveElement'
        }
    },
    {
        path:'/use-event-listener',
        component: () => import('@/views/VueUse/useEventListener.vue'),
        meta:{
            title: 'useEventListener'
        }
    },
]