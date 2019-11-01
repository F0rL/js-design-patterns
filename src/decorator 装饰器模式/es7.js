//提案阶段
//@testDec
class Demo {

}
function testDec(target){
  target.isDec = true
}
console.log(Demo.isDec) // true

//装饰类
//@testDec(true)
class Demo {

}
function testDec(isDec){
  return function(target){
    target.isDec = isDec
  }
}
console.log(Demo.isDec) // true

// mixin
function mixins(...list) {
  return function(target) {
    Object.assign(target.prototype, ...list)
  }
}

const Foo = {
  foo(){
    console.log('foo')
  }
}

// @mixins(Foo)
class MyClass {

}

let obj = new MyClass()
obj.foo() // 'foo'


// 装饰方法
class Person {
  constructor(){
    this.first = 'a'
    this.last = 'b'
  }
  //@readonly
  name(){
    return `{this.first}-----{this.last}`
  }
}
function readonly(target, name, descriptor) {
  // descriptor属性描述，OBject.defineProperty
  descriptor.writable = false
  return descriptor 
}

// log
function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}

class Math {
  //@log
  add(a, b) {
    return a + b;
  }
}

const math = new Math();
const result = math.add(2, 4);