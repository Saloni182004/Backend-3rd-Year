/*--------FIRST METHOD-------------------------------
process.stdout.write("Enter your name: ");

process.stdin.on("data", function (data) {
  console.log("Hello, " + data.toString().trim());
  process.exit(); 
});
----------------------------------------------------*/

/*-----------SECOND METHOD-----------------------------
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", function (name) {
  console.log(`Hello, ${name}!`);
  rl.close(); // close the input stream
});
---------------------------------------------------------*/

/*-------MULTIPLE INPUTS---------------------------------
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", function (num1) {
  rl.question("Enter second number: ", function (num2) {
    const sum = parseInt(num1) + parseInt(num2);
    console.log(`Sum: ${sum}`);
    rl.close();
  });
});
---------------------------------------------------------*/

/*--------PROMPT SYNC------------------------------------
const prompt = require("prompt-sync")();

const name = prompt("Enter your name: ");
console.log("Hello, " + name);
-------------------------------------------------------*/


