/* Return the length of the longest word in the provided sentence.

Your response should be a number.


// Understand
    There is a sentence as an input.  Find out which word in the sentence is the longest.

// Plan
Make the sentence an array, with each word making up an element in the array
Use reduce, compare the length of each element and save, or keep the one
that is the longest in the accumulator. <-- I had trouble thinking about the acc as a number, which doesn't 
have a length property.

Do the same with map() 

Use sort()

*/
function findLongestWordLength(str) {
    let longWord = str.split(" ")
    .reduce((longWord, eachWord) => { 
        return eachWord.length > longWord ? eachWord.length : longWord
    }, 0);

    return longWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
 /*

*/
// Complete using the easiest method to me:

function findLongestWordLength(str) {
        let newStr = str.split(" ");
        
        let longestWord = 0;
        
        newStr.map(num => {
        if (num.length > longestWord)
        longestWord = num.length;	
    })
    return longestWord;
    
      }
      
      findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Solved using sort

function findLongestWordLength(str) {
    return str.split(' ')
        .sort((a,b) => a.length - b.length)
        .pop().length;
}


findLongestWordLength("The quick brown fox jumped over the lazy dog")



findLongestWordLength("The quick brown fox jumped over the lazy dog") // should return a number.
findLongestWordLength("The quick brown fox jumped over the lazy dog") // should return 6.
findLongestWordLength("May the force be with you") // should return 5.
findLongestWordLength("Google do a barrel roll") // should return 6.
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") // should return 8.
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") // should return 19.