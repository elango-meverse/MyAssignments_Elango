
//Classroom Activity

/*Learn how to manipulate strings and use looping statements in a programming language to solve practical 
problems.
Example: 2
Given a string s consisting of words and spaces, return the length of the last word in the string. 
Input: s = "   fly me   to   the moon  " 
Output: 4 
Explanation: The last word is "moon" with length 4. 

*/

const readline = require('readline');

function stringLength() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

rl.question('Enter your String: ', (inputString) => {

//const S = " fly me to the moon ";

const string = inputString.trim().split(" ");
const lastWord = string[string.length - 1];

console.log("The string you given is: " + inputString);
console.log("The lastWord of the string is: " + lastWord);
console.log("The length of the lastWord of the string is: " + lastWord.length);
 

 rl.close(); 
    }); 
}

stringLength();