// 系统中唯一使用
// 一个类只有一个实例
// 单例模式严格来说需要用到java private
// ES6中没有

class SingleObject {
  login() {
    console.log('login')
  }
}

SingleObject.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  }
})()

let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
// 不能实现私有
let obj3 = new SingleObject()
obj3.login()

console.log('obj1 === obj2', obj1 === obj2)
console.log('obj1 === obj3', obj1 === obj3)