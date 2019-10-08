// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(A) {
    return A.sort(function (a, b) {
      return a - b
    })[0];
  }
}
/* 
function SmallestIntegerFinder(A) {
  // only positive values, sorted
  A = A.filter(x => x >= 1).sort((a, b) => a - b)

  let x = 1

  for (let i = 0; i < A.length; i++) {
    // if we find a smaller number no need to continue, cause the array is sorted
    if (x < A[i]) {
      return x
    }
    x = A[i] + 1
  }

  return x
} */

let finder = new SmallestIntegerFinder();
console.log(finder.findSmallestInt([34, 15, 88, 2]));
console.log(finder.findSmallestInt([34, -345, -1, 100]));