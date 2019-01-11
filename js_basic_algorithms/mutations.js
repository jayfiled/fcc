/* 
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
    const [ checkString, match ] = arr;
    const splitCheck = checkString.split('');
    const splitMatch = match.split('');
// debugger;
   return splitMatch.map(letter => letter);

  }
  
  mutation(["hello", "hey"]);

  // Notes:

  // make both elements lowercase
  // make first element an array split by character
  // make the second element an array split by character

  // iterate over the first array and for each index, check to see if each item
  // from the second array matches it.  If it return true, increment a counter
  // by 1.
  // if that counter matches the length of the second element, return true to the function.

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