
//Classroom Activity

/*Learn how to manipulate strings and use looping statements in a programming language to solve practical 
problems. 
Assignment Details:  
Given a string s consisting of words and spaces, return the length of the last word in the string. 
Example 1: 
Input: s = "Hello World" 
Output: 5 
Explanation: The last word is "World" with length 5. */


function stringLength() {

const S = "hello world"

const string = S.trim().split(" ");
const lastWord = string[string.length - 1];

console.log("The string is: " + S);
console.log("The lastWord of the string is: " + lastWord);
console.log("The length of the lastWord of the string is: " + lastWord.length);
    
}

stringLength();