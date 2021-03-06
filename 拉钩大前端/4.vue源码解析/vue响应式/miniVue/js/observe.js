class Observe{
    constructor(data){
        this._walk(data);
    }

    _walk(data){
        const loop = (obj) => {
            Object.keys(obj).forEach(k => {
                if(typeof obj[k] != 'object'){
                    this.defineReactive(obj,k,obj[k])
                }else if(!Array.isArray(obj[k])){
                    loop(obj[k])
                }
                
            })
        }
        loop(data);
    }

    defineReactive(obj,key,val){
        const self = this;
        let dep = new Dep()
        Object.defineProperty(obj,key,{
            enumerable: true,
            configurable: true,
            get(){
                // 收集依赖
                if(Dep.target){
                    dep.addSub(Dep.target)
                }
                console.log('get data')
                return val
            },
            set(newV){
                if(newV == val ) return
                console.log('set data')
                val = newV
                if(typeof newV == 'object' && !Array.isArray(newV)){
                    self._walk(newV)
                }
                // 发送通知
                dep.notify();
            }
        })
    }

}