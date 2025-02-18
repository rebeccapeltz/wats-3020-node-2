# WATS 3020 Node 2
* Objects
* Arrays
* Functions
* Indexing, Looping and Algorithms
* Events
* Comments


## I/O for this code  
* Use the local module **getargs** to pull a single argument out of the command line for input. 
* Use the local module **io** to prompt the user for input 
* Use console.log(<string>) or io.print(<string>) for output.

## Using the **io** module
The local **io** module provides a "wrapper" around the node `readline` module.  Two functions are exported from the **io** module: `print` and `terminal`.  We often create functions wrappers around other functions when we want to supply specific options.  

The `print` function behaves exactly the same way as the `console.log` function and was created just to show you could write your own `console.log` function.

The `terminal` function allows us to use `readline` with our terminal output.  The `readline` function is asynchronous.  Asynchronous code **"listens"** for **"events"** to be fired and responds by executing code within a **"callback"** function.  JavaScript is an event driven, functional language.  

Many times i/o (input/output) commands are implemented as events because the computer must wait for a user or device to tell it the the input or output is ready to be processed.  Rather than have the processing unit of the computer actually wait, in an async system, the next in the instruction set is processed.  Setting up a listener allows code dependent on input to be called only when the input is available without tying up processing.

The **terminal** function listens for the `readline` events which include `line` and `close`.  The `line` event is fired when the user hits the enter key to produce a `newline` character.  The `close` function is fired when the `terminal.close()` function is executed or the code exits the process with `process.exit()`.

The `terminal.setPrompt("{ask for data}")` command can be used to provide string output when asking the user for something.  Then when `terminal.prompt()` is called the string provided is shown to the user and the computer waits for a response.  When the user presses the enter key, the callback for the `line` event is executed. 

The pattern you'll see in the code for exercises 3-4 is as follows:
```JavaScript
// ask first question
io.terminal.setPrompt(`Ask a question? `);
io.terminal.prompt();

//gather answers
io.terminal.on('line', function (response) {
    //process the response

    //if you need more info
    io.terminal.setPrompt(`Ask another question? `);
    io.terminal.prompt();

    //else close the terminal
    io.terminal.close()

  })
  .on('close', function () {
    io.print("Summarize the data")
  });

```
## JavaScript Objects
We've learned that variable reference "containers" that have types and contain data. For example in the statement`let s = "red"`, the variable `s` references a string variable with the data value "red".  
JavaScript Objects contain data in the form of key/value pairs where the key is the reference and the value is the data.  Objects can also reference functions.  Below, you'll read about functions as "containers" for code.  

Objects can be created using the curly brace syntax.
```JavaScript
let obj = {}
obj.color = "red"
obj.number = 1
obj.color = "blue"
console.log(obj.color, obj.number) // blue 1
```
Keys are unique in Objects.  As in the example above when assign color a second time, I don't get 2 colors in the Object because there can only be one "color" key.  We'll see that this can be useful when we're trying to identify unique data or count instances of non-unique data.

## JavaScript Object Processing
If we have an Object and we want to access or output all the Key/Value pairs, we can do this using the `for/in` syntax. In the example below we initialize an object and print out all the key, value pairs.  
```JavaScript
let obj = {color: "red", number:1}
for (key in obj){
  console.log(key, obj[key])
}
```
The output would look like this:
```JavaScript
color red
number 1
```
Note that the keys are not quoted in the initialization, but that values representing strings must be quotes. It's as if each Key is a variable and the Value is the data.  We'll learn about JSON (JavaScript Object Notation), which is a data interchange format.  In JSON all Keys are quoted.

Also notice the way the `for/in` syntax works. The name `key` following `for` is just a variable name and can be whatever you want.  The name `obj` following `in` is the name of the Object you're going to process.  The `for` will loop through all the Keys in the Object (order not fixed or guaranteed to be the same each time) and assign each Key's value to the variable `key`.  

To pull the data out of the object we need to use the square braces syntax `[]` because we are using a variable containing the value of the key to access the value in the object.

It's important to recognize that Objects hold data by associating it with unique Keys and that there is no order associated with the Keys.

If we run `typeof` on an Object variable, we'll see that it is an "object"
```JavaScript
let obj = {}
console.log(typeof obj) // prints object
```

## JavaScript Array Processing
Arrays are also Objects. The syntax for defining an Array is to use **square braces []**. There are no Key/Value pairs in Arrays.  Instead Arrays uses integer indexes to access data in what resembles a list.  Arrays can use negative values for indexes, but by convention array indexes start at 0.
```JavaScript
let arr = []
arr[0] = "red"
arr[1] = 1

```
Unlike the Objects described above, and owning to the use of integer indexes, the data in Arrays can be ordered.  You can think of the index as a Key because, in fact they are.

The Array object is defined with many methods (functions) that serve a variety of purposes.  Arrays unlike Objects described above are iterable which means we can loop over them and the order will be the same every time.  In fact it will be the order of the indexes.

We can add data to arrays in several ways.  If we want to add it to the end of the array, use the `push` function.
```JavaScript
let arr = []
arr.push("a")
console.log(arr) // displays "a"
```
We can also just assign a value by using an index.
```JavaScript 
let arr = []
arr[0] = "a"
console.log(arr) // displays "a"
```

Two, of many techniques for iterating over arrays are shown below.
```JavaScript
// for loop
let arr = ["a","b","c"]
for (let i=0;i<arr.length;i++){
  console.log(i, arr[i])
}
```
The above prints out
```JavaScript
0 a
1 b
2 c
```
Note the loop above walks through the Array by initializing a counter variable `i`. With each run through the loop it tests to see if it is done processing by comparing the counter `i` to the `length` of the array.  Because `i` start counting at 0, the test for done is `i < arr.length` instead of `i < arr.length`.  The `length` property reports the maximum number of items in the array.  Because we have a counter, we can output the index and the value.

```JavaScript
// for/of loop
let arr = ["a","b","c"]
for (let item of arr){
  console.log(item)
}
```
The above prints out
```JavaScript
a
b
c
```
The `for/of` loop shown above is similar to the `for/in` loop used for traversing Objects.  We declare the variable `item` to take on the value of each item in the array.  The name `item` is arbitrary as we can name this variable anything (that is a reasonable variable name).  

The important thing to know about using Arrays is that they can be used to maintain order.  In fact there is a sort function that can be used to create an ordered array based on programatically defining the order.  If I have a need for an ordered list of items, I'm probably going to use an Array to hold such data. 

If we run `typeof` on an Array variable, we'll see that it is an "object"
```JavaScript
let arr = []
console.log(typeof arr) // prints object
``` 

## JavaScript Functions
Functions allow us to encapsulate code so that we can run it by calling from anyplace in our code.  This is especially helpful when we want to call some code over and over as in a loop and we don't want to clutter up the code with a lot of commands right inside the loop.    
Using functions is part of **structure programming**.  This refers to taking a large problem and breaking it down into "functional" pieces.  You'll also see functions added to objects to provide the methods which define what the object can do.  Functions together with data are what make up an object.  

We have two different syntaxes available for defining functions.  The arrow syntax is new (ES6) and it provides for a scoped `this` value.  In standard functions, `this` can refer to an object outside of the curly braces that make up the function, but with arrow functions, `this` is only relevant within the curly braces.  
Example of syntax for standard functions:
```JavaScript
  function displayThis(){
    console.log(this) //displays all data in global namespace
  }
```
Example of syntax for arrow functions:
```JavaScript
  let displayThis = ()=>{
    console.log(this) //displays undefined
  }
```
You can test out the difference in running with these 2 ways by running `node functions` in this project,  and looking at the code in `.functions.js`

## Indexing, Looping and Algorithms

## Project Resources

It might be helpful to review some additional resources as you work through
this project:

* [Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
* [Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
* [Array functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods)
* [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
* [Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
* [Looping and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
* [Algorithms](https://developer.mozilla.org/en-US/docs/Glossary/Algorithm)

* * *
## Tutorials
Fork this repository.
In order to successfully complete this assignment, you must find and complete the **TODOs** in the code:

**1-fizzbuzz (required)** 
  - TODO fill in the comment template.  This program will look for an integer argument. If it doesn't find one it will display a message showing the format of the command.  The input is an an integer.  The output is a list of all values from 1 to the value of the integer. If the number is divisible by 3 it is marked "fizz", if it's divisible by 5 it is marked "buzz" and if it is divisible for 15 (3 and 5) it is marked "buzz".
  - TODO check for integer argument and if no integer entered provide a usage statement and quit
  ```JavaScript
  if (isNaN(input) || !Number.isInteger(input)) {
    console.log("usage: node 1-fizzbuzz/index.js <integer>")
    process.exit(1)
  }
  ```
  - TODO provide info to for loop to iterate from 1 to value of input
  ```JavaScript
  let i = 1; i <= input; i++
  ```
  - TODO provide test for divisible for 3,5, and 15 to create desired output
  ```JavaScript
    i % 15 === 0 //divisible by 3 and 5
    i % 5 === 0 //divisible by 5
    i % 3 === 0 //divisible by 3
  ```
  
**1-fizzbuzz-fun (required)** 
In this tutorial, we move our logic into a function.  Pulling logic into a function makes it easier to share and test.
  - TODO once you get fizzbuzz working above copy it to the 1-fizzubzz-fun directory
  - TODO replace the loop that was testing each value with a loop that calls a function 
  ```JavaScript
  for (let i = 1; i <= input; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`)
  }
  ```
  - TODO put the logic for determining fizzbuzz into a function named `fizzbuzz` that receives the value to be tested and returns fizz, buzz, fizzbuzz or an empty string
  ```JavaScript
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
  ```
**2-reverse-string (required)**
 - TODO fill in the comment template.  This program will look for a string argument. If it doesn't find one it will display a message showing the format of the command.  The input is an an string.  The output is the input string reversed. The user can enter multiple words in a string argument by using quotes.
  - TODO check for string argument and if no string is entered provide a usage statement and quit
  ```JavaScript
 if (!input || input.length === 0) {
  console.log("usage: node 2-reverse-string <string>")
  process.exit(1)
}
  ```
  - TODO use array functions to reverse the string by splitting string into array elements, using the array reverse method, and then using the array join method to turn the array back into a string. Log the reversed string.
  ```JavaScript
  console.log(input.split('').reverse().join(''))
  ```
**2-reverse-string-iterate (required)**
In this tutorial you look at optimizing an algorithm.  We write code in a function and try to minimize iteration.  It's faster if you only have to iterate through half a string than to iterate through the whole string.
- TODO once you get the reverse string working above, copy the `index.js` file into the iterate directory.  You can remove the reverse string code but keep the input code.
- TODO write a function that iterates through all of the characters in the string to create a string that is reversed and call the function using the input
```JavaScript
function reverseWithFullIteration(str) {
  let result = ''
  //work from the back forward to build a string
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}
console.log("result with full iteration", reverseWithFullIteration(input))
```
- TODO write a function that reverses the string but only iterates over half of the input string
```JavaScript
function reverseWithHalfIteration(str){
  let result = []
  //swap characters from back and front
  for (let i = 0; i < str.length / 2; i++) {
    result[i] = str[(str.length - i)]
    result[str.length - i] = str[i]
  }
  return result.join('')
}
console.log("result with half iteration", reverseWithHalfIteration(input))
```
**3-data-collection (required)**
In this tutorial you'll use a local module to prompt the user to enter data.  Then you'll store the data in an object that you define.  You'll use a counter to access the questions from and array.  In the end you'll loop through the keys in an object and report the data you've collected.

- TODO require the io module and name it `io`
```JavaScript
const io = require("../modules/io")
```
- TODO init a userData object
```JavaScript
let userData = {} //initialize an object to capture the data
```
- TODO init a counter to keep track of questions
```JavaScript
let counter = 0 //initial counter 
```
- TODO set the question prompt based on the counter and the questionKeys array
```
`${questionKeys[counter]["question"]}? `
```
- TODO load the answer using the question key in the userData Object
```JavaScript
 let currentQuestion = questionKeys[counter]
    let key = currentQuestion.key
    userData[key] = response
```
- TODO increment the counter
```JavaScript
counter++
```
- TODO logical expression to test if we are through with questions
```JavaScript
counter >= questionKeys.length
```
- TODO get the next question
```JavaScript
      let nextQuestion = questionKeys[counter]
```
- TODO loop through keys in object and using io.print to report
```JavaScript
for (let d in userData) {
      io.print(`${d}: ${userData[d]}`)
}
```
- TODO fill in comments template


**4-character-count (required)**
Counting words in a sentence and sentences in a document is a common problem.  In this exercise we count characters in an picked up in from a user prompt.  It's handy to use an object to count the characters, but then for reporting we often want the counts in order and an array is useful for that.  
- TODO init charcount object to count characters
```JavaScript
let charcount = {}
```
- TODO set the prompt the enter a string
```JavaScript
io.terminal.setPrompt("Enter a string to analyze: ")
```
- TODO turn the response into an array of characters
```JavaScript
  let characters = response.split('')
```
- TODO iterate through array to create object that has character for key and count for value
```JavaScript
for (let character of characters){
  if (charcount[character]){
    charcount[character] ++
  } else {
    charcount[character] = 1
  }
}
```
- TODO convert object to array of objects by looping through characters in object
```JavaScript
for (let character in charcount ){
  charArr.push({char:character,count:charcount[character]})
}
```
- TODO sort the array based on count
```JavaScript
charArr.sort(function(a,b){
  if (a.count<b.count) return -1  //return -1 to indicate less than
  else if (a.count>b.count) return 1  //return +1 to indicate greater than
  else return 0  //return 0 to indicate equal tod
})
```
- TODO iterate through array and report the character and its count in ascending order  
```JavaScript
for (let row of charArr){
  io.print (`${row.char} ${row.count}`)
}
```
- TODO fill in comments template

**5-create-list (diy)**  
Follow instructions in TODO's to code up a program that gathers data from user and puts it into an array using the array `push` function.  When user enters "quit", don't add that but stop collecting data and report back the completed list.

**6-guessing-game (optional)**
In this tutorial we create a random number for the user to guess.  The same type function calls could be use to simulate the roll of a dice.  Then we prompt the user up to 3 times to guess the number.  In this code we just report that the user guesses correctly or not, but you could also, let them know if they guessed to high or too low.  If they don't guess correctly within 3 guesses that program terminates, telling them the correct guess.  

- TODO create a variable 'n' that contains a random number between 1 and 10
```JavaScript
let n = Math.floor(Math.random() * 10) + 1 //get this randomly
```
- TODO initialize guessCount to 0 as we'll allow only 3 guesses
```JavaScript
let guessCount = 0
```
- TODO write a function 'getOrdinal' that takes an integer between 1 and 3 and returns "first","second","third" and return the input if not 1-3
```JavaScript
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
```
- TODO increment the counter
```JavaScript
  guessCount++;
```
- 
```JavaScript
 if (responseInt !== NaN) {
    if (responseInt === n) {
```
- TODO write a logical expression to see if user has used up all guesses
```JavaScript
 if (guessCount > 2) {
```
- TODO detect the terminal is closing and do something
```JavaScript
io.terminal.on('close', function () {
  console.log(`DONE`)
  process.exit();
});
```
- TODO fill in comments template


**NOTE: be sure to test all your apps**

## Turn in assignment
Push your code to the forked repository in your account and [**create a pull request**](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork).  This will make it available for instructor code review.  

Turn in 2 URL's on Canvas which should be of the format:
* https://github.com/{account name}/{repo name}



## Stretch Goals

Complete the optional tutorials.



