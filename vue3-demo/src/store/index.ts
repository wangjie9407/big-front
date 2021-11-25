import { createStore } from 'vuex'

 const store =  createStore({
    state(){
        return {
            count:0
        }
    },
    mutations:{
        setCount(state:{count: Number}, val){
            state.count = val
        }
    },
})

export default store