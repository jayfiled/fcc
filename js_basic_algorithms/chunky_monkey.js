/* 
Write a function that splits an array (first argument) into groups the 
length of size (second argument) and returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
    const arrCopy = [...arr];

    // This will be our 2D array - chunks go into this array to be returned 
    let arra = [];

    // Only loop enough times as the length of the array permits
    for (let i = 0; (arr.length / size) > i; i++) {
        arra[i] = arrCopy.splice(0,size);
    }
    
    // If everything has been removed from the original array, return the 2D array
    if (arrCopy.length === 0) {
    return arra;
    }
    else // if there was an element left in our original array copy, put it on the end of our 2D array and return it.
    {
        arra.push(arrCopy);
        return arra;
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