//TODO fill in comment template
/*
Description:
Input:
Output:
Usage: 
*/
const getargs = require("../modules/getargs")
// test that input is a number and exit with error
// get the value to be evaluated
let input = getargs.getStringArg()
//test that it is a string

if (!input || input.length === 0) {
  console.log("usage: node 2-reverse-string <string>")
  process.exit(1)
  }


console.log(input.split('').reverse().join(''))

