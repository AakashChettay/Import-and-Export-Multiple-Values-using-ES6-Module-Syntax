// importMultipleValues.mjs
import {myArray, bulb, multiplyByFour} from './exportMultipleValues.mjs'
import readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
rl.question('Enter a number: ', num => {
  console.log(multiplyByFour(num))
  rl.close()
})
console.log(myArray)
console.log(bulb)
// console.log(multiplyByFour())
