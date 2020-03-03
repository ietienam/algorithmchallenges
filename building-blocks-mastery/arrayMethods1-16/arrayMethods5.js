/**
 * removeFromBackOfNew
Write a function called "removeFromBackOfNew".

Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.

Notes:

You should be familiar with the 'slice' method.
var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
 */
function removeFromBackOfNew(arr) {
  // your code here
  var lastElement = arr.length - 1;
  return arr.slice(0, lastElement);
}


/**
 * removeFromFrontOfNew
Write a function called "removeFromFrontOfNew".

Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.

Notes:

You should be familiar with the 'slice' method.
var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
 */
function removeFromFrontOfNew(arr) {
  // your code here
  return arr.slice(1);
}


/**
 * countCharacter
Write a function called "countCharacter".

Given a string input and a character, "countCharacter" returns the number of occurrences of a given character in the given string.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
 */
function countCharacter(str, char) {
  // your code here
  var count = 0;
  for(let cha of str) {
      if(cha === char) {
          count++;
      }
  }
  return count;
}
