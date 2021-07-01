class Vue{
    constructor(options){
        // 1.通过属性保存数据
        this.$options = options;
        this.$data = options.data || {};
        this.$el = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
        // 2.把data中成员转换成getter和setter并注入到vue实例中
        this._proxyData(this.$data);
        // 3.调用observe对象，监听数据变化
        new Observe(this.$data);
        // 调用compile对象，解析指令和插值表达式
        new Compile(this)
    }

    _proxyData(data){
        const loop = (obj) => {
            Object.keys(obj).forEach(k => {
                if(typeof obj[k] != 'object'){
                    Object.defineProperty(this,k,{
                        enumerable: true,
                        configurable: true,
                        get(){
                            return obj[k]
                        },
                        set(newV){
                            if(newV == obj[k]) return
                            obj[k] = newV
                        }
                    })
                }else if(!Array.isArray(obj[k])){
                    loop(obj[k])
                }
                
            })
        }
        loop(data);
    }

}
