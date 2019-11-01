// 有路径问题，放在外层即可

const fs = require('fs')
const readline = require('readline')

const readStream = fs.createReadStream('./file.txt')

let length = 0
readStream.on('data', function(chunk){
  length += chunk.toString().length
})
readStream.on('end', function(){
  console.log('length: ' + length)
})

let rl = readline.createInterface({
  input: fs.createReadStream('./file.txt')
})

let lineNum = 0
rk.on('line',function(line) {
  lineNum++
})
rl.on('close', function(){
  console.log('lineNum', lineNum)
})