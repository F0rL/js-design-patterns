// 实现bind
Function.prototype.vbind = (...args) => {
  const context = args.shift()
  return (...args2) => {
    return this.apply(context, [...args, ...args2])
  }
}

obj = {
  name: 'kuma'
}

const say = (function() {
  console.log(this.name)
}).bind(obj)

say()

//优先级：new 绑定 > 显示绑定 > 隐式绑定 > 默认绑定

// 柯里化
function curry(fn, ...arg1) {
  return function(...arg2) {
    return fn.apply(null, arg1.concat(arg2))
  }
}

function sayHello(name, age, hobbit) {
  console.log(`my name is ${name},${age} years old, I love ${hobbit}`)
}

const fn = curry(sayHello, 'kuma', '22')

fn('sing')

// 反柯里化
function unCurry(fn) {
  return function(tar, ...arg) {
    return fn.apply(tar, arg)
  }
}

const push = unCurry(Array.prototype.push)

const execPush = (...arg) => {
  push(arg, 4)
  console.log(arg)
}

execPush(1,2,3)

// 柯里化是在运算前提前传参，可以传递多个参数；
// 反柯里化是延迟传参，在运算时把原来已经固定的参数或者 this 上下文等当作参数延迟到未来传递。

//偏函数
//偏函数是创建一个调用另外一个部分（参数或变量已预制的函数）的函数，函数可以根据传入的参数来生成一个真正执行的函数

var isType = function(type) {
  return function(obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}

var isString = isType('String')
var isFunction = isType('Function')

console.log(isString('dfdf'))
console.log(isFunction('dfdf'))


