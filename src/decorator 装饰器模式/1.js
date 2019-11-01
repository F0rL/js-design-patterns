// 为对象添加新功能
// 不改变原有的结构和功能
// ES7装饰器
// core-decorators 常用装饰器

class Circle {
  draw(){
    console.log('换一个圆形')
  }
}

class Decorator {
  constructor(cricle){
    this.cricle = cricle
  }
  draw(){
    this.cricle.draw()
    this.setRedBorder(circle)
  }
  setRedBorder(circle){
    console.log('设置红色边框')
  }
}

// 测试
let circle = new Circle()
circle.draw()
console.log('----------------')
let dec = new Decorator(circle)
dec.draw()

