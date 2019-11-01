// 顺序访问一个有序集合
// 使用者无需知道集合内部结构

class Iterator {
  constructor(container) {
    this.list = container.list
    this.index = 0
  }
  next(){
    if(this.hasNext()){
      return this.list[this.index++]
    }
    return null
  }
  hasNext(){
    if(this.index >= this.list.length){
      return false
    }
    return true
  }
}

class Container {
  constructor(list) {
    this.list = list
  }
  // 生成遍历器
  getInterator(){
    return new Iterator(this)
  }
}

const arr = [1,2,3,4,5,6,7,8]

let container = new Container(arr)
let iterator = container.getInterator()
while(iterator.hasNext()){
  console.log(iterator.next())
}