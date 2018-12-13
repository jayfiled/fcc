/*
Return the factorial of the provided integer.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

// Understand:
    // A factorial of a number is every number up to that number times itself excluding 0, i.e. 5! = 1 x 2 x 3 x 4 x 5 = 120
    
// Plan:
    // Given input 5 the necessary steps to output 120 are:

// Divide:
    // Get a list of all the numbers up until the input
    // Times them by each other and add up the sum on each iteration in a separate variable
    // Return the variable keeping track of the sum

// Options:
    // Recursive function
    // For loop
    // array.prototype.reduce

    function factorialize(num) {
        return num;
      }
      
      factorialize(5);



// tests

factorialize(5) // should return a number.
factorialize(5) // should return 120.
factorialize(10) // should return 3628800.
factorialize(20) // should return 2432902008176640000.
factorialize(0) // should return 1.