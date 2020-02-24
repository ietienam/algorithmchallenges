/**
 * isOddLength
 *
 *
Write a function called "isOddLength".

Given a word, "isOddLength" returns whether the length of the given word is odd.

var output = isOddLength('special');
console.log(output); // --> true
 */
function isOddLength(word) {
  // your code here
  return (word.length % 2) !== 0 ? true : false;
}


/**
 * isEvenLength
 *
 *
Write a function called "isEvenLength".

Given a word, "isEvenLength" returns whether the length of the word is even.

var output = isEvenLength('wow');
console.log(output); // --> false
 */
function isEvenLength(word) {
  // your code here
  return (word.length % 2) === 0 ? true : false;
}



/**
 * isEvenAndGreaterThan10
 *
 *
Write a function called "isEvenAndGreaterThanTen".

Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false
 */
function isEvenAndGreaterThanTen(num) {
  // your code here
  return ((num % 2) === 0 && (num > 10)) ? true : false;
}
