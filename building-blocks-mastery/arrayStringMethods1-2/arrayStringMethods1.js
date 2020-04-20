/**
 * getAllLetters
Write a function called "getAllLetters".

Given a word, "getAllLetters" returns an array containing every character in the word.

Notes:

If given an empty string, it should return an empty array.
You should be familiar with the 'split' method.
var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
 */

function getAllLetters(str) {
  // your code here
  var arr = [];
  if(str.length < 1) {
      return arr;
  } else {
      arr = str.split('');
      return arr;
  }
}

/**
 * getAllWords
Write a function called "getAllWords".

Given a sentence, "getAllWords" returns an array containing every word in the sentence.

Notes:

If given an empty string, it should return an empty array.
You should be familiar with the 'split' method.
var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
 */

function getAllWords(str) {
  // your code here
  var arr = [];
  if(str.length < 1) {
      return arr;
  } else {
      arr = str.split(' ');
      return arr;
  }
}
