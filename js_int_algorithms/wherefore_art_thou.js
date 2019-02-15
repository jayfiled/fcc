/* 
Make a function that looks through an array of objects (first argument) and returns
 an array of all objects that have matching name and value pairs (second argument). 
 Each name and value pair of the source object has to be present in the object from
  the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" },
 { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
  and the second argument is { last: "Capulet" }, then you must return the third 
  object from the array (the first argument), because it contains the name and its value,
   that was passed on as the second argument.

 */

// Failed first attempt

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = Object.entries(source);
    // Only change code below this line
    
    var newColl = collection.filter(el => {
      // if any of the properties in el matches
      // source, then return true

      // need to extract the key values into something iterable
      // to compare

      let insideArr = (Object.entries(el)); // [] -> [] -> key values 
      /*
      (2) [Array(2), Array(2)]
      0: (2) ["first", "Romeo"]
      1: (2) ["last", "Montague"]
      */
      
      if (arr[0][0] === insideArr[0][0] || insideArr[0][1] ) {
        return true;
      }
      
      // do same with source, compare spreadArr and if match either, then return true

    })
    
return insideArr;
    // Only change code above this line
    // return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

  /* Notes:
  I need to iterate over the array.  On each iteration I need to check if the key value pair from the source object 
  matches the key value pair from each element.
  I can create a new array with filter as filter will return the whole element if the condition resolves to true.
*/

// Successful attempt after getting some hints about Array.prototype.every() && Object.hasOwnValue

function where(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  // Filter array and remove the ones that do not have the keys from source.
  arr = collection.filter(function(obj) {
    //Use the Array method every() instead of a for loop to check for every key from source.
    return keys.every(function(key) {
      // Check if the object has the property and the same value.
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  return arr;
}


  //Tests

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) // should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) // should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) // should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) // should return []