/**
 * isLessThan
 *
 *
Write a function called "isLessThan". Given 2 numbers, "isLessThan" returns whether num2 is less than num1.

var output = isLessThan(9, 4);
console.log(output); // --> true
 */
function isLessThan(num1, num2) {
  // your code here
  return num2 < num1 ? true : false;
}

/**
 * isGreaterThan
 *
 *
Write a function called "isGreaterThan". Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.

var output = isGreaterThan(11, 10);
console.log(output); // --> false
 */
function isGreaterThan(num1, num2) {
  // your code here
  return num2 > num1 ? true : false;
}

/**
 * isEqualTo
 *
 *
Write a function called "isEqualTo". Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.

var output = isEqualTo(11, 10);
console.log(output); // --> false
 */
function isEqualTo(num1, num2) {
  // your code here
  return num2 === num1 ? true : false;
}


/**
 *isEven


Write a function called "isEven". Given a number, "isEven" returns whether it is even.

var output = isEven(11);
console.log(output); // --> false
 */

function isEven(num) {
  // your code here
  return (num % 2) === 0 ? true : false;
}


