
//Write a function to check if two strings are anagrams.



//const word1 = "silent";
//const word2 = "listen";


const readline = require('readline'); 
//Function #1
function isAnagram(word1, word2) {
    const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cleanString = (str1) => {
        return str1
            .toLowerCase()                  // Ignore case sensitivity
            .replace(/[^a-z0-9]/g, '')     // Remove spaces and punctuation
            .split('')                     // Turn into an array of letters
            .sort()                        // Sort alphabetically
            .join('');                     // Join back into a string
    };

   //const word="inputWord"
rl.question('Enter your Word1: ', (inputWord1) => {
    rl.question('Enter your Word2: ', (inputWord2) => {
    
    
      console.log("Your sortedWord1 is: " + cleanString(inputWord1));
      console.log("Your sortedWord2 is: " + cleanString(inputWord2));
      //return  cleanString(word1)=== cleanString(word2);
    
if(cleanString(inputWord1)===cleanString(inputWord2)){

  // Print the output
  console.log("Output: Word1 and Word2 are Anagrams!")


} 

else {
    console.log("Output: Word1 and Word2 are Not Anagrams!")
    
}
 rl.close();
});
});
}
isAnagram();

