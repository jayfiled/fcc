/* 
Write a function that splits an array (first argument) into groups the 
length of size (second argument) and returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
    let arra = [];
    for (let i = 0; size >= i; i++) {
        console.log(i)
        //  arra[i] = arr.splice(0,size);
        //  console.log(arra0, arra1, arra2);
    }

  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Plan:
  // Use a 'for loop' to splice the input size from the array and return it to a variable
  // return an array with the variable's spread into them and the left over elements in the original array

  // tests

chunkArrayInGroups(["a", "b", "c", "d"], 2) // should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) // should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) // should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].