// 一个对象有状态变化
// 每次状态变化都会触发一个逻辑
// 不能总是用if else 来控制
// 状态对象和主题对象分离，状态变化逻辑单独处理
// 符合开放封闭原则 

class State {
  constructor(color) {
    this.color = color
  }
  handle(context){
    console.log(`turn to ${this.color}`)
    context.setState(this)
  }
}

class Context {
  constructor(){
    this.state = null
  }
  getState(){
    return this.state
  }
  setState(state){
    this.state = state
  }
}

let context = new Context()
let green = new State('green')
let yellow = new State('yellow')
let red = new State('red')

green.handle(context)
console.log(context.getState())

yellow.handle(context)
console.log(context.getState())

red.handle(context)
console.log(context.getState())