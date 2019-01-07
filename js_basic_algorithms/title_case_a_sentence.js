/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
// split and make all lower case to avoid case issues

const newStr = str.split(' ')
.toLowerCase() // ['i'm', 'a', 'little', 'teapot']

// make  the 0th element of each element uppercase by splicing out the 0th index into a separate var
// then splice the rest of the indexed items to their own var
// then return the concatenated vars

.map(element => {
  const firstLetter = element.splice(0,1).toUpperCase
})      

  console.log(result);
    // return str;
  }
  
  titleCase("I'm a little tea pot");

  // split the string by it's spaces into an array
  // make all letters lowercase
  // uppercase the [0]th element of each string
    // each element's [0]th element should be turned to uppercase and the element returned
  // join the array by removing spaces to convert to a string
  // return string 

  // tests

titleCase("I'm a little tea pot") // should return a string.
titleCase("I'm a little tea pot") // should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") // should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") // should return Here Is My Handle Here Is My Spout.