/*
Description:
Input:
Output:
Usage: 
*/
const getargs = require("../modules/getargs")

// get the value to be evaluated
let input = getargs.getIntegerArg()

// test that input is a number and exit with error
if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 1-fizzbuzz/index.js <integer>")
  process.exit(1)
}

function fizzbuzz(n){
  if (n % 15 === 0) {
    return "fizzbuzz"
  } else if (n % 3 === 0) {
    return "fizz"
  } else if (n % 5 === 0) {
    return "buzz"
  } else {
    return ""
  }
}

// iterate from 1 to the value of input
for (let i = 1; i <= input; i++) {
  console.log(`${i}: ${fizzbuzz(i)}`)
}
