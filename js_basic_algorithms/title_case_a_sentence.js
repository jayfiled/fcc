/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
    return str;
  }
  
  titleCase("I'm a little tea pot");

  // split the string by it's spaces into an array
  // make all letters lowercase
  // uppercase the [0]th element of each string
  // join the array by removing spaces to convert to a string
  // return string 

  // tests

titleCase("I'm a little tea pot") // should return a string.
titleCase("I'm a little tea pot") // should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") // should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") // should return Here Is My Handle Here Is My Spout.