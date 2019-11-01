import { __values } from "tslib"

const star = {
  name: 'kuma',
  age: 22,
  phone: 'star: 15577881199'
}

let agent = new Proxy(star, {
  get(target, key){
    if(key === 'phone') {
      return 'agent: 11012345566'
    }
    if(key === 'price') {
      return 10000000000
    }
    return target[key]
  },
  set(target, key, val){
    if(key === 'customPrice'){
      if(val < 100000){
        throw new Error('价格太低')
      }else {
        target[key] = value
        return true
      }
    }
  }
})

console.log(agent.name)
console.log(agent.phone)
console.log(agent.price)
agent.customPrice = 123
