/*
Description:
Input:
Output:
Usage: 
*/
//create a variable 'n' that contains a random number between 1 and 10
let n = Math.floor(Math.random() * 10) + 1 //get this randomly


//initialize guessCount to 0 and we'll allow only 3 guesses
let guessCount = 0

const io = require("../modules/io/index")

//TODO write a function 'getOrdinal' that takes an integer between 1 and 3 and returns "first","second","third" and return the input if not 1-3
function getOrdinal(n){
  if (n === 1){
    return "first"
  } else if (n===2){
    return "second"
  } else if (n===3) {
    return "third"
  }
  else {
    return n
  }
}

//set the prompt message
io.terminal.setPrompt('3 Guesses: Guess the number! (1-10): ');

//run the prompt mesage in the terminal
io.terminal.prompt();

//on a line feed capture response and process
io.terminal.on('line', function (response) {
  //do something with the response

  //TODO increment the counter
  guessCount++;

  // need to turn the response string into a number to compare
  // TODO convert the response string into and integer 
  let responseInt = parseInt(response)

  // TODO write logical expressions to test for valid integer and that if guess equals random 'n'
  if (responseInt !== NaN) {
    if (responseInt === n) {
      console.log(`You win!! - ${responseInt} is the number`);
      process.exit(0);
    } else {
      io.print(`Your ${getOrdinal(guessCount)} guess ${responseInt} is incorrect`)
    }
  }
  // (optional) say something if number guessed is too big

  // (optional) say something if number guessed is too small

  // if done guessing exit
  //write a logical expression to see if user has used up all guesses
  if (guessCount > 2) {
    console.log('You lose - game over');
    //report the correct value
    console.log(`correct value: ${n}`)
    io.terminal.close(); //io.close??
  }
  //if not guesses run the prompt again
  io.terminal.prompt()
})


io.terminal.on('close', function () {
  console.log(`DONE`)
  process.exit();
});