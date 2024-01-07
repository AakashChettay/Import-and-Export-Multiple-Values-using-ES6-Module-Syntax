// exportMultipleValues.mjs
let myArray = ['camel', 265, true, '5.6']
let bulb = {watts: 10, type: 'LED'}

let multiplyByFour = function (num) {
  return 4 * num
}
export {myArray, bulb, multiplyByFour}
