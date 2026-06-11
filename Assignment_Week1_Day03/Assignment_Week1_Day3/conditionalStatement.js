//Learning Objective:
//Learn if-else and switch case
/*
Assignment Details:
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
`runTests` with `switch` for test type messages.
*/

// Set up the interface to read from the terminal


// Ask the question for Browser and TestType


const readline = require('readline'); 
//Function #1
function launchBrowser() {
    const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
   //const browserName="inputBrowser"
rl.question('Enter your browserName: ', (inputBrowser) => {
if(inputBrowser==="Chrome"){

  // Print the output
  console.log("Your browserName is: " + inputBrowser);


} 
else {
    console.log("Your browserName is: Other");
    
}
 rl.close();
 runTests();
});
}

//Function #2
function runTests() {
    const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  //  let testType="inputTestType"
    rl.question('Enter your testType: ', (inputTestType) => {
     
switch (inputTestType) {
    case "Smoke":
        console.log("Your testType is: " + inputTestType);
        break;
    case "Sanity":
        console.log("Your testType is: " + inputTestType);
        break
    case "Regression":
        console.log("Your testType is: " + inputTestType);
        break
    default:
        console.log("Your testType is: Smoke");
        break;
} 
  rl.close();
})
}

// Calling both functions 


launchBrowser();