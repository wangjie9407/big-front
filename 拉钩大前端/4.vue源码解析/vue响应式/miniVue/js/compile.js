class Compile{
    constructor(vm){
        this.el = vm.$el
        this.vm = vm
        this.compile(this.el)
    }

    // 编译模板，处理元素和文本节点
    compile(el){
        Array.from(el.childNodes).forEach(node => {
            if(this.isElementNode(node)){
                this.compileElement(node)
            }else if(this.isTextNode(node)){
                this.compileText(node)
            }
            if(node.childNodes && node.childNodes.length){
                this.compile(node)
            }
        })
    }

    // 编译元素节点，处理指令
    compileElement(node){
        Array.from(node.attributes).forEach(attr => {
            const dir = attr.nodeName
            const key = attr.value
            this.isDirective(dir) && this.update(dir, node, key)
        })
    }

    // 过度方法，整合指令，并调用对应方法
    update(directive, node, key){
        const dir = directive.substr(2)
        const dirFn = this[dir+'Update']
        dirFn && dirFn.call(this,node, this.vm[key], key)
    }

    // v-text指令对应的方法
    textUpdate(node, val,key){
        node.textContent = val
        new Watcher(this.vm, key, (newVal) => {
            node.textContent = newVal
        })
    }

    // v-model指令对应的方法
    modelUpdate(node, val, key){
        node.value = val
        node.addEventListener('input', (e) => {
            this.vm[key] = node.value
            console.log(node.value)
        })
        new Watcher(this.vm, key, (newVal) => {
            node.value = newVal
           
        })
        
    }

    // 处理文本节点，处理插值表达式
    compileText(node){
        const reg = /\{\{(.+?)\}\}/
        const val = node.textContent
        if(reg.test(val)){
            const key = RegExp.$1.trim()
            node.textContent = node.textContent.replace(reg, this.vm[key])
            new Watcher(this.vm, key, (newVal) => {
                node.textContent = newVal
            })
        }
    }

    // 判断元素属性是否为指令
    isDirective(attrName){
        return attrName.startsWith('v-')
    }

    // 判断节点是否为文本节点
    isTextNode(node){
        return node.nodeType === 3
    }

    // 判断节点是否为元素节点
    isElementNode(node){
        return node.nodeType === 1
    }
}