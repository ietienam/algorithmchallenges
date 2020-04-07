/**
 * getLongestOfThreeWords
Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

Notes:

If there is a tie, it should return the first word in the tie.
var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

 */

function getLongestOfThreeWords(word1, word2, word3) {
  // your code here
  var words = [word1, word2, word3];
  var longest = words[0];
  for(var i = 0; i < words.length; i++) {
      while(words[i].length > longest.length) {
          longest = words[i];
      }
  }
  return longest;
}


/**
 * findShortestOfThreeWords
Write a function called "findShortestOfThreeWords".

Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

Notes:

If there are ties, it should return the first word in the parameters list.
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
 */

function findShortestOfThreeWords(word1, word2, word3) {
  // your code here
  var words = [word1, word2, word3];
  var short = words[0];
  for(var i = 0; i < words.length; i++) {
      while(words[i].length < short.length) {
          short = words[i];
      };
  }
  return short;
}
