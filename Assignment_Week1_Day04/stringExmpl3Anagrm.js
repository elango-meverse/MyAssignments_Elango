
//Classroom Activity

/*
Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
*/



 function isAnagram(word1, word2) {

        const cleanString = (str) => {

        const result1 = str.toLowerCase()
        const result2 = result1.replace(/[^a-zA-Z0-9]/g, "");
        const result3 = result2.split('');
        const result4 = result3.sort() 
        const result = result4.join('');
        
        return result;
        }

    console.log("cleanString1: " + cleanString(word1));
    console.log("cleanString2: " + cleanString(word2));
    return cleanString(word1) === cleanString(word2);

}
console.log(isAnagram("listen", "silent"));   // Output: true
//(ignores spaces/case)
console.log(isAnagram("Dormitory", "dirty room")); // Output: true 
console.log(isAnagram("hello", "world"));       // Output: false

