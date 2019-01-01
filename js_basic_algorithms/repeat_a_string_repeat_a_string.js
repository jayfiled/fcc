/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {

    let concatStr = ""

    for (let i = 0; i < num; i++){
        concatStr += str;
    }
    return concatStr;
  }
  
  repeatStringNumTimes("abc", 3);


// Test cases
repeatStringNumTimes("*", 3) // should return "***".
repeatStringNumTimes("abc", 3) // should return "abcabcabc".
repeatStringNumTimes("abc", 4) // should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) // should return "abc".
repeatStringNumTimes("*", 8) // should return "********".
repeatStringNumTimes("abc", -2) // should return "".

//The built-in repeat()-method should not be used