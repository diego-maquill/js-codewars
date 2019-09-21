/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.
*/

function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  let square = Math.sqrt(sq);
  // If number is not a decimal
  if (Number.isInteger(square)) {
    // Increament square root of input number by 1
    square+=1;
    // Return the new number's value raise to 2
    return Math.pow(square,2);
  }
  else {
    return -1;
  }
  return Math.sqrt(sq);
}

console.log( findNextSquare(121) );// --> returns 144
console.log( findNextSquare(625) );// --> returns 676
console.log( findNextSquare(114) );// --> returns -1 since 114 is not a perfect