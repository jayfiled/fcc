/* 

You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

*/

function frankenSplice(arr1, arr2, n) {

let tempArr = [...arr1];
let tempArr2 = [...arr2];

  let splicedArr = tempArr
  .splice(0, tempArr.length);

  tempArr2.splice(n,0, ...splicedArr);

return tempArr2;
  // return arr2.slice(n, splicedArr);

}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// tests

frankenSplice([1, 2, 3], [4, 5], 1) // should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) // should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) // should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
/* 
All elements from the first array should be added to the second array in their original order.
The first array should remain the same after the function runs.
The second array should remain the same after the function runs. 
*/