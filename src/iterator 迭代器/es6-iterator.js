// 有序集合的数据类型已经很多
// Array Map Set String TypedArray arguments NodeList
// object不是，可以用Map代替

// 都有[Symbol.iterator]属性
// 属性值是函数，执行函数返回一个迭代器,有一个next方法
// ex: Array.prototype[Symbol.iterator]
function each(data) {
  let iterator = data[Symbol.iterator]()

  // console.log(iterator.next()) 
  // 有数据时返回{value: xxx, done: false}

  let item = {done: false}
  while(!item.done) {
    item = iterator.next()
    if(!item.done){
      console.log(item.value)
    }
  }
}

// 测试
const arr = [1,22,3,4]
let m = new Map()
m.set('a', 1000)
m.set('b', 200)

each(arr)
each(m)

// 不是每个人都需要封装each
// for...of 语法

// 只要返回的数据符合iterator接口要求，可以使用
