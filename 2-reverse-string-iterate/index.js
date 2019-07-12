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


  function reverseWithFullIteration(str) {
    let result = ''
    //work from the back forward to build a string
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i]
    }
    return result
  }

  console.log("result with full iteration", reverseWithFullIteration(input))
  function reverseWithHalfIteration(str){
    let result = []
    //swap characters from back and front
    for (let i = 0; i < str.length / 2; i++) {
      result[i] = str[(str.length - i)]
      result[str.length - i] = str[i]
      // console.log("result", result.join(''))
    }
    return result.join('')
  }
  console.log("result with half iteration", reverseWithHalfIteration(input))

