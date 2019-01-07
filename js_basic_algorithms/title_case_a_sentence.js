/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

// Understand

function titleCase(str) {
  // split and make all lower case to avoid case issues
  
  const newStr = str.toLowerCase().split(' ')  // ['i'm', 'a', 'little', 'teapot']
   
   // make the 0th element of each element uppercase by splicing out the 0th index into a separate var
  .map(element => {
    const firstLetter = element.split('').splice(0,1).join(''); // On the first element in the array:  "i'm"  =>   ["i","'","m"]   =>   ["i"] => "i"
  
  // then splice the rest of the indexed items to their own var
    const restOfStr = element.split('').splice(1,(element.length - 1)).join(''); // On the first element in the array:  "i'm"  =>   ["i","'","m"]   =>   ["'", "m"]   =>   "'m"
  
    // then return the concatenated vars
    return firstLetter.toUpperCase() + restOfStr;
  
  })      
    return newStr.join(' ');
    }
    
    titleCase("I'm a little tea pot");

  // Notes:

    // split the string by it's spaces into an array
    // make all letters lowercase
    // uppercase the [0]th element of each string
      // each element's [0]th element should be turned to uppercase and the element returned
    // join the array by removing spaces to convert to a string
    // return string 

  // Complete (I'm sure there are a ton of better ways..)
  function titleCase(str) {
    const newStr = str.toLowerCase().split(' ').map(element => {
      const firstLetter = element.split('').splice(0,1).join('');
    
      const restOfStr = element.split('').splice(1,(element.length - 1)).join('');
      return firstLetter.toUpperCase() + restOfStr;
    });     
    
     return newStr.join(' ');
      }
      
      titleCase("I'm a little tea pot");

  // tests

titleCase("I'm a little tea pot") // should return a string.
titleCase("I'm a little tea pot") // should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") // should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") // should return Here Is My Handle Here Is My Spout.