/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Michael") logs "Hello Michael"
 */
function greet(name) {
  console.log(`Hello ${name}`)
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  return n % 2 !== 0;
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  return Math.floor(n/2)
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n % 2 === 0){
      return n * 2
  }
  else {
      return n * n
  }
}
console.log(greet("name"), isOdd(5), oddsSmallerThan(15), squareOrDouble(5))
module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
