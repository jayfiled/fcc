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

// RECURSION
    function factorialize(num) {
        if (num === 0)
        return 1;
        else
        return num * factorialize(num - 1);
      }
      
      factorialize(5);

      /*
            num   num === 0?  return num * factioralize(num - 1)
stack 1      5     false       5 * 4                          
stack 2      4     false       4 * 3                                
stack 3      3     false       3 * 2                            
stack 4      2     false       2 * 1                                
stack 5      1     false       1 * 0                           
stack 6      0     true                                        

// now we have our arguments for  the return value

stack 6 returns 1
stack 5 returns 1 * 1 = 1
stack 4 returns 2 * 1 = 2
stack 3 returns 3 * 2 = 6
stack 2 returns 4 * 6 = 24
original call - stack 1 returns 5 * 24 = 120
*/

// FOR LOOP

// Try 1
// still needs to be inside a function
function factorialize(num) {
    // 1 is the factor of 0
    if (num === 0)
    return 1;
    else {
        // start multiplying num by its factors stating at 4 (num = 1)
        for (let i = num - 1; i >= 1; i--) {
            // reassign the result to num // incorrect.  I wasn't reassigning.  I was adding AND reassigning
            num += num * i;
        }
        return num;
    }
}

/*
            num    i       i>=1?       num * i          num+= num * i
round 1      5      4       true        5*4 // 20           5 + 20   
round 2      25     3       true        25*3 // 75          25 + 75
round 3      100    2       true        100*2 // 200         100 + 200 
round 4      300    1       true        300*1 // 300        300 + 300
return 600

*/
// Try 2

function factorialize(num) {
    // 1 is the factor of 0
    if (num === 0)
    return 1;
    else {
        // start multiplying num by its factors starting at 4 (num = 1)
        for (let i = num - 1; i >= 1; i--) {
            // REALLY reassign the result to num
            num = num * i;
        }
        return num;
    }
}

/*
            num    i       i>=1?       num * i          num+= num * i
round 1      5      4       true        5*4 // 20           5 + 20   
round 2      25     3       true        25*3 // 75          25 + 75
round 3      100    2       true        100*2 // 200         100 + 200 
round 4      300    1       true        300*1 // 300        300 + 300
return 600

*/

// tests

factorialize(5) // should return a number.
factorialize(5) // should return 120.
factorialize(10) // should return 3628800.
factorialize(20) // should return 2432902008176640000.
factorialize(0) // should return 1.