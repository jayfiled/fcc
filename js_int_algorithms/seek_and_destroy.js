
/* 
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
 */

function destroyer(arr) {
    
 console.log(Object.entries(arguments));



 Object.entries(arguments).map((el,i) => {
   el.splice(0,1);
    
  let arr[i] = el;

 })


  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  /* Object.entries(argument) returns:

0: Array [ "0", (6) […] ]
​
1: Array [ "1", 2 ]
​
2: Array [ "2", 3 ]
​
*/

/* Argumnets object looks like this:
   ​
0: Array(6) [ 1, 2, 3, … ]
​
1: 2
​
2: 3

*/

// Notes:
  // the arguments object holds the arguments stored as key:value pairs starting at 0 as the first key.
  // create a new copy of the arguments object to mutate
  // iterate over the object using for-in 
  // make an array from the first element and another one from the remaining element, splice and spread 
  



destroyer([1, 2, 3, 1, 2, 3], 2, 3) // should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) // should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) // should return [1].
destroyer([2, 3, 2, 3], 2, 3) // should return [].
destroyer(["tree", "hamburger", 53], "tree", 53 //) should return ["hamburger"].
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], 
"yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") // should return [12,92,65].