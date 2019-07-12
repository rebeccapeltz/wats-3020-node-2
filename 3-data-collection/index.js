/*
Description:
Input: prompted input based on question array
Output:
Usage: 
*/
const io = require("../modules/io")


const questionKeys = [{
    "key": "name",
    "question": "What is your name"
  },
  {
    "key": "color",
    "question": "What is your favorite color"
  },
  {
    "key": "number",
    "question": "What is is your favorite number"
  }
]
let userData = {} //initialize an object to capture the data

let counter = 0 //initial counter 

// ask first question

io.terminal.setPrompt(`${questionKeys[counter]["question"]}? `);

//show the prompt and wait for response
io.terminal.prompt();

//gather answers
// get response when use click enter key 
io.terminal.on('line', function (response) {
    //get the current question and use the key to store the answer in the userData object
    let currentQuestion = questionKeys[counter]

    //TODO load the answer using the question key in the userData Object
    let key = currentQuestion.key
    userData[key] = response
    //TODO increment the counter
    counter++

    if (counter >= questionKeys.length) {
      io.terminal.close()
    } else {
      let nextQuestion = questionKeys[counter]

      io.terminal.setPrompt(`${nextQuestion["question"]}? `);
      //call the prompt
      io.terminal.prompt();
    }

  })
  .on('close', function () {
    io.print("Questions complete")
    //loop through keys in object and using io.print to report
    for (let d in userData) {
      io.print(`${d}: ${userData[d]}`)
    }
  });