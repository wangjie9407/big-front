import { defineStore } from 'pinia'

 const useUserInfoStore =  defineStore({
    id:'userInfo',
    state:() => ({
        username:''
    }),
    getters:{
        username: (state) => state.username
    },
    actions:{
        setUsername(name){
            this.username = name
        }
    }
 })

export default useUserInfoStore