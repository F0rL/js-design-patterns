// 工厂模式
// 将new操作单独封装
// 构造函数和创建者分离
// 开放封闭原则

class Product {
  constructor(name) {
    this.name = name
  }
  init(){
    console.log('init')
  }
  fun1() {
    console.log('fun1')
  }
  fun2(){
    console.log('fun2')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

let creator = new Creator()
let p = creator.create('p1')
p.init()
p.fun1()