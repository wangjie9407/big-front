import { defineStore } from 'pinia'

 const useUserInfoStore =  defineStore({
    id:'userInfo',
    state:() => ({
        username:''
    }),
     actions:{
        setUsername(name){
            this.username = name
        }
    }
 })

export default useUserInfoStore