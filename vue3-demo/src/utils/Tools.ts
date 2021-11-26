 // 设置本地缓存
 export function setLocal(name:string,val: string){
    localStorage.setItem(name, val)
}

// 移除本地缓存
export function delLocal(name:string){
    localStorage.removeItem(name)
}

// 将源对象的值赋给目标对象中的相同属性
export function passVal(source, target) {
    const keys: string[] = Object.keys(target)
    keys.forEach(k => source.hasOwnProperty(k) ? target[k] = source[k] : null)
}
