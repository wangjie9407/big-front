const PENDING = 'pending';
const FULLFILLED = 'fullfilled';
const REJECTED = 'rejected';

class MyPromise{
    constructor(excute){
        excute(this.resolve, this.reject)
    }

    status = PENDING; //状态
    value = null; // 响应成功的值
    reason = null;// 响应失败的原因
    successCallback = []; // 响应成功的回调
    failCallback = []; // 相应失败的回调

    resolve = (val) => {
        if(this.status != PENDING) return;
        this.status = FULLFILLED;
        this.value = val;
        while(this.successCallback.length) {
            const res = this.successCallback.shift();
            // res(this.value)
            console.log(res)
            this.resolvePromise(res(this.value), res)
        }
    };

    reject = (reason) => {
        if(this.status != PENDING) return;
        this.status = REJECTED;
        this.reason = reason;
        while(this.failCallback.length) this.failCallback.shift()(this.reason)
    }

    then (handleFullfilled, handleRejected) {
        const pro = new MyPromise((res, rej) => {
            if(this.status == FULLFILLED){
                const v = handleFullfilled(this.value);
                this.resolvePromise(v, res, rej)
            }else if(this.status == REJECTED){
                // this.resolvePromise(this.reject)
            }else{
                // then支持多次调用，故接收回调函数的变量需要用数组处理
                this.successCallback.push(handleFullfilled) ;
                this.failCallback.push(handleRejected);
            }
        })
        return pro;        
    }

    resolvePromise(val, resolve, reject){
        if(val instanceof MyPromise){
            val.then(resolve, reject)
        }else{
            resolve(val);
        }
    }
}