/**
 * areValidCredentials
Write a function called "areValidCredentials".

Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true
 */

function areValidCredentials(name, password) {
  // your code here
  if(name.length > 3 && password.length > 7) {
      return true;
  }
  return false;
}

/**
 * findMinLengthOfThreeWords
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
 */

function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var wordArray = [word1, word2, word3];
  var minLength = word1.length;
  for(var word of wordArray) {
      if(word.length < minLength) {
          minLength = word;
      }
  }
  return minLength;
}

/**
 * findMaxLengthOfThreeWords
Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
 */

function findMaxLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var words = [word1, word2, word3];
  var maxLength = word1.length;
  for(var word = 0; word < words.length; word++) {
      if(words[word].length > maxLength) {
          maxLength = words[word].length;
      }
  }
  return maxLength;
}
