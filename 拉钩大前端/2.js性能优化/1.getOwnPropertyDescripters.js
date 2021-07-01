const obj = {
    firstname:'wang',
    secondName:'jie',
    get fullname(){
        return this.firstname + this.secondName
    }
    
}

const obj2 = {...obj, sex: 'man'}

console.log(obj2.fullname);