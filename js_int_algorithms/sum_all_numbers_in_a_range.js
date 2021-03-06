/* 
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
 */

function sumAll(arr) {
    
  }
  
  sumAll([1, 4]);

  // Plan

  // Destructure the two numbers, return the sum of those to a variable.

  // Create a new array that stores the numbers between the two into an array.
  // First check which number is larger, so you can either increment or decrement.

  function sumAll(arr) {
    let [first, second] = arr;

	const largerInput = first > second ? first : second;
	const smallerInput = first < second ? first : second;

    const loopThisManyTimes = largerInput - smallerInput;

    const saveBetweenNumbersHere = [];

    // i === 1 because we want to increment or decrement a number based on how many
    // numbers are between the two inputs, not including them.
    for (let i = 1; i < loopThisManyTimes; i++) {
      if (first < second) {
        first++
        saveBetweenNumbersHere.push(first);
      }
      else {
        second++
        saveBetweenNumbersHere.push(second);
      }
    }

    return arr[0] + arr[1] + saveBetweenNumbersHere.reduce((acc, el) => acc + el);
  }
  
  sumAll([1, 4]);


// tests

sumAll([1, 4]) // should return a number.
sumAll([1, 4]) // should return 10.
sumAll([4, 1]) // should return 10.
sumAll([5, 10]) // should return 45.  //fail
sumAll([10, 5]) // should return 45.