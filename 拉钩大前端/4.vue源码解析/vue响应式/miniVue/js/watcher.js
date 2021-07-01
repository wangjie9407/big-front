class Watcher{
    constructor(vm, key, cb){
        this.vm = vm
        this.key = key
        this.cb = cb
        // 将watcher对象记录到Dep的target静态属性中
        Dep.target = this
        // 触发get方法，在get方法中会调用addSub
        this.oldVal = vm[key]
        // 清空target，避免重复添加
        Dep.target = null
    }

    update(){
        const newVal = this.vm[this.key]
        if(newVal === this.oldVal) return
        this.cb(newVal)
    }
}