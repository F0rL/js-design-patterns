// 登录框
class LoginForm {
  constructor() {
    this.state = 'hide'
  }

  show() {
    if (this.state === 'show') {
      console.log('have show')
      return
    }
    this.state = 'show'
    console.log('show login success')
  }

  hide() {
    if (this.state === 'hide') {
      console.log('have hide')
      return
    }
    this.state = 'hide'
    console.log('hide login success')
  }
}

LoginForm.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new LoginForm()
    }
    return instance
  }
})()

// 测试

let login1 = LoginForm.getInstance()
login1.show()
let login2 = LoginForm.getInstance()
login2.show()
login2.hide()
login2.hide()

console.log('login1 === login2', login1 === login2)