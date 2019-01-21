/* 
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

// Try 1 - works on all tests except where the string has two letters.

function mutation(arr) {

  const [ firstString, secondString ] = arr;

  const splitFirst = firstString.toLowerCase().split('');
  const splitSecond = secondString.toLowerCase().split('');

  const totalOfMatchedLetters = splitFirst.reduce((acc, el, i) => {
    // is el === to splitSecond[0],[1] or [2]
    
    const innerLoop = splitSecond.reduce((inc, index) => {
      // console.log('first element and array: ', el, splitFirst, 'second element and array array: ', index, splitSecond);
      return index === el ? inc += 1 : inc += 0
    
    },0)
    
    return acc += innerLoop;

  },0);

return totalOfMatchedLetters === secondString.length ? true : false;

};

  // Notes:

  // The Function takes 1 array, with two elements.

  // Split the elements up into separate strings

  // make both strings lowercase

  // make both strings an array where each element is a letter from the string

  // loop over the first array and on each element, check to see if any of the second array's
  // elements match it.  If so, return 1, if not return 0.

  // if  the total number returned matches the second string's length, then the algorithm returns true.

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Try 2 - complete - got a hint from FCC to use string.indexOf() and if everything is lowercase it is easier to compare.

function mutation(arr) {

  const lowerArr = arr.map(el => el.toLowerCase());

  const [ firstString, secondString ] = lowerArr;

  const splitSecond = secondString.split('');

  // indexOf returns -1 to the array if the argument is not in the string
  const checkForTruthy = splitSecond.map(el => {
    return firstString.indexOf(el)
  })

  // check if the array contains a -1.  If it does then the function returns true, else false.
return checkForTruthy.includes(-1) === true ? false : true;

};




  // tests

mutation(["hello", "hey"]) // should return false.
mutation(["hello", "Hello"]) // should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // should return true.
mutation(["Mary", "Army"]) // should return true.
mutation(["Mary", "Aarmy"]) // should return true.
mutation(["Alien", "line"]) // should return true.
mutation(["floor", "for"]) // should return true.
mutation(["hello", "neo"]) // should return false.
mutation(["voodoo", "no"]) // should return false.