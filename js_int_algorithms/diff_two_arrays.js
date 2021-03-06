/* 
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
 */

function diffArray(arr1, arr2) {
  const newArr = [...arr1, ...arr2]; // [1, 1, 2, 2, 3, 3, 4, 5, 5]
  newArr.sort();
	
  return newArr.filter((el, i) => {
	return el === newArr[i+1];
  })

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  // Notes:
  // Flatten the array, sort and filter out the only entry without a duplicate entry
  // Check if the next item in the index matches the current one, if it doesn't return the next one... should work for numbers.. strings maybe not.

// Got a hint from the fcc website to use indexOf

  function diffArray(arr1, arr2) {
    const filteredArr1 = arr1.filter(value => arr2.indexOf(value) === -1);

    //console.log(filteredArr1);

    const filteredArr2 = arr2.filter(value => arr1.indexOf(value) === -1);

   // console.log(filteredArr2);

    return [...filteredArr1, ...filteredArr2];
  
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) // should return an array.
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) //  should return ["pink wool"].
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) // should return an array with one item.
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) // should return ["diorite", "pink wool"].
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) // should return an array with two items.
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) // should return [].
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) // should return an empty array.
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) // should return [4].
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) // should return an array with one item.
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) // should return ["piglet", 4].
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) // should return an array with two items.
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) // should return ["snuffleupagus", "cookie monster", "elmo"].
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) // should return an array with three items.
diffArray([1, "calf", 3, "piglet"], [7, "filly"]) // should return [1, "calf", 3, "piglet", 7, "filly"].
diffArray([1, "calf", 3, "piglet"], [7, "filly"]) // should return an array with six items.