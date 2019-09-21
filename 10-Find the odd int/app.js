/*
Given an array, find the int that appears an odd number of times. There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  // If lenght of array is 1
  if (A.length == 1) {
    return A[0];
  }
  else {
    // Otherwise, count instances of each number in array and put it into a hash key value pair
    hash_numbers = A.reduce( function(prev, item) {
      if (item in prev) prev[item]++;
      else prev[item] = 1;
      return prev;
    }, {} );

    // Find the first instance of an Odd count in the hash
    for( i in hash_numbers ) {
      if (hash_numbers[i]%2 != 0) {
        return parseInt(i);
      }
    }
    return null;
  }
}

console.log( findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) ); //, 5);
console.log( findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]) ); //, -1);
console.log( findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]) ); //, 5);
console.log( findOdd([10]) ); //, 10);
console.log( findOdd([1,1,1,1,1,1,10,1,1,1,1]) ); //, 10);
console.log( findOdd([5,4,3,2,1,5,4,3,2,10,10]) ); //, 1);