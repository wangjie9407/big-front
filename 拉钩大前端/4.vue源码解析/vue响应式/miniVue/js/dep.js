class Dep{
    constructor(){
        // 缓存所有观察者
        this.subs = []
    }

    addSub(sub){
        if(sub && sub.update) this.subs.push(sub)
    }

    notify(){
        this.subs.forEach(s => s.update())
    }
}