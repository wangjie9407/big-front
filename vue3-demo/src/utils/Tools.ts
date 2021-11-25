export default class Tools {
    static setLocal(name:string,val: string){
        localStorage.setItem(name, val)
    }

    static delLocal(name:string){
        localStorage.removeItem(name)
    }
}