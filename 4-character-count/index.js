/*
Description:
Input:
Output:
Usage: 
*/
const io = require("../modules/io/index")

//init charcount object to count characters
let charcount = {}

//set the prompt the enter a string
io.terminal.setPrompt("Enter a string to analyze: ")


// call the prompt
io.terminal.prompt()

io.terminal.on("line", function (response) {
  //split the string to create an array
  let characters = response.split('')

  //TODO iterate through array to create object that has character for key and count for value
  for (let character of characters){
    if (charcount[character]){
      charcount[character] ++
    } else {
      charcount[character] = 1
    }
  }
  /*
  h: 1
  e: 1
  l: 2
  o: 1
  */
  io.terminal.close()
})
.on("close",function(){
  let charArr = []
  //TODO sort the array based on count
  for (let character in charcount ){
    charArr.push({char:character,count:charcount[character]})
  }
 
  charArr.sort(function(a,b){
    if (a.count<b.count) return -1  //return -1 to indicate less than
    else if (a.count>b.count) return 1  //return +1 to indicate greater than
    else return 0  //return 0 to indicate equal
  })
  

  io.print("Character count in ascending order:")
  //iterate through array and report the character and its count in ascending order 
  for (let row of charArr){
    io.print (`${row.char} ${row.count}`)
  }
})