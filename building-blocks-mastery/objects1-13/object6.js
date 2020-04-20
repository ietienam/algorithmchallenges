/**
 * removeArrayValues
Write a function called "removeArrayValues".

Given an object, "removeArrayValues" removes any properties whose values are arrays.

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }
 */

function removeArrayValues(obj) {
  // your code here
  for(var objProps in obj) {
      if(Array.isArray(obj[objProps])) {
          delete obj[objProps];
      }
  }
}

/**
 * removeNumberValues
Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any properties whose values are numbers.

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
 */

function removeNumberValues(obj) {
  // your code here
  for(var objProps in obj) {
      if(!(isNaN(obj[objProps]))){
          delete obj[objProps];
      }
  }
}


/**
 * removeStringValues
Write a function called "removeStringValues".

Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }
 */

function removeStringValues(obj) {
  // your code here
  for(var objProps in obj) {
      if(typeof obj[objProps] === 'string') {
          delete obj[objProps];
      }
  }
}
