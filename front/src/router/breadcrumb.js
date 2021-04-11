export default function changeBreadcrumb(router, store) {
    router.afterEach((to, from) => {
        const {pathList, } = store.state;
        const {commit} = store;
        const f = pathList.indexOf(from);
        if(f<0){
            if(from.path== "/" && !from.name){
                commit('SET_PATHLIST', [...pathList, "Login"])
            }else{
                commit('SET_PATHLIST', [...pathList, from.name])
            }
        }
    })
}