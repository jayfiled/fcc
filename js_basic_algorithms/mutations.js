/* 
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {

  const [ firstString, secondString ] = arr;

  const splitFirst = firstString.split('');
  const splitSecond = secondString.split('');

  return splitFirst.reduce((acc, el, i) => {

    return el === splitSecond[i] ? acc += 1 : acc += 0;

  },0)

};
  
  mutation(["hello", "hey"]); // returns 2... ** debugger to see what is missing.

  // Notes:

  // The Function takes 1 array, with two elements.

  // Split the elements up into separate strings

  // make both strings lowercase

  // make both strings an array where each element is a letter from the string

  // loop over the first array and on each element, check to see if any of the second array's
  // elements match it.  If so, return 1, if not return 0.

  // if  the total number returned matches the second string's length, then the algorithm returns true.


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