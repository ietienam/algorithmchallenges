/**
 * countWords
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

Notes:

If given an empty string, it should return an empty object.
var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
 */

function countWords(str) {
  // your code here
  var obj = {};
  var words = str.split(' ');
  if(str.length < 1) {
      return obj;
  } else {
      for(var word of words) {
          if(obj[word] === undefined) {
              obj[word] = 1;
          } else {
              obj[word] += 1;
          }
      }
  }
  return obj;
}
