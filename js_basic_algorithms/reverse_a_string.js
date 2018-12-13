/*
Reverse the provided string.

Your result must be a string.
*/

// just get it working
function reverseString(str) {
    const newStr = str.split('').reverse().join('');
    return newStr;
  }
  
  reverseString("hello");

// refactored

const reverseString = str => str.split('').reverse().join('');
reverseString('Howdy');

// test cases:
  reverseString("hello") // should return a string.
  reverseString("hello") // should become "olleh".
  reverseString("Howdy") // should become "ydwoH".
  reverseString("Greetings from Earth") // should return "htraE morf sgniteerG".