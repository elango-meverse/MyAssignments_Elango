

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
   //const word="inputWord"
rl.question('Enter your Word1: ', (inputWord1) => {
    const cleanString1 = (str1) => {
        return str1
            .toLowerCase()                  // Ignore case sensitivity
            .replace(/[^a-z0-9]/g, '')     // Remove spaces and punctuation
            .split('')                     // Turn into an array of letters
            .sort()                        // Sort alphabetically
            .join('');                     // Join back into a string
    };
    //return cleanString(word1) === cleanString(word2);
      console.log("Your Word1 is: " + cleanString1(inputWord1));

      rl.question('Enter your Word2: ', (inputWord2) => {
    const cleanString2 = (str2) => {
        return str2
            .toLowerCase()                  
            .replace(/[^a-z0-9]/g, '')     
            .split('')                     
            .sort()                       
            .join('');                     
    };
    //return cleanString(word1) === cleanString(word2);
      console.log("Your Word2 is: " + cleanString2(inputWord2));


if((inputWord1)===(inputWord2)){
  // Print the output
  console.log("Anagram"); // Not Getting 
} 
else {
    console.log("Not Anagram");
    
}
 rl.close();
});
});

}
isAnagram();

