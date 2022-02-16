let flag:boolean = false;
let num: number  = 1;
let str: string = '123'
let arr: Array<number> = [123]
let dom: (HTMLElement|null) = document.getElementById('id')

// 类型断言
let tem: string | number;
(tem! as number).toFixed(2)

// 双重类型断言
tem! as any as boolean

// 接口
interface Speakable{
    name: string;
    speak(): void;
    // 任意属性
    [key: string]: any
}
// 同名接口可写多个，会自动合并
interface Speakable{
    skill: Array<string | number>
}
// 函数类型接口
interface Discount{
    (price: number): void
}
const obj: Speakable = {
    name:'jj',
    skill:['js', 10],
    speak(){}
}
// 抽象类无法被实现，但在声明抽象类时可以实现内部方法，声明接口时不能实现其内部方法

// 泛型，在声明一个类型时，可能暂未定义其数据类型，或者其数据类型不唯一，就先用变量 T 占位，当使用时再声明其具体数据结构
class MyArray<T>{
    private list:T[] = [];
    add(item:T){
        this.list.push(item)
    };
    
}

// 默认泛型
class MyArray2<T = number>{}

// 泛型约束： 当参数或变量使用泛型却因需要做某些操作，导致报错时，可以使用泛型约束保证代码能正常变异
interface Cacluate{
    <T extends string | Array<any>>(a:T, b:T): number
}
const calcaute: Cacluate= <T extends string | Array<any>>(a:T, b:T): number => {
    return a.length + b.length
}
calcaute<Array<any> | string>('2,3', [1,2])

const discount: Discount =  (price: number) => {}

interface Num{
    val: number
}

interface Cus{
    new(val: number): Num
}
// 一键将interface中所有属性全切换为可选属性
interface DemoModel {
    a:number,
    b:string,
    c:boolean,
}
type CheckableModel<DemoModel> = {
    [key in keyof DemoModel]: DemoModel[key]
}



class Person implements Speakable{
    name: string;
    speak(): void {
        throw new Error("Method not implemented.");
    }
    skill: (string | number)[];
}