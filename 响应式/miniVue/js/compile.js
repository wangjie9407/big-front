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
    compileElement(node){}

    // 处理文本节点，处理插值表达式
    compileText(node){
        const reg = /\{\{(.+?)\}\}/
        const val = node.textContent
        if(reg.test(val)){
            const key = RegExp.$1.trim()
            node.textContent = node.textContent.replace(reg, this.vm[key])
        }
        console.log('textNode', node)
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