// Given an array of integers your solution should find the smallest integer.
/* 
class SmallestIntegerFinder {
  findSmallestInt(A) {
    return A.sort(function (a, b) {
      return a - b
    })[0];
  }
}
 */
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

let finder = new SmallestIntegerFinder();
console.log(finder.findSmallestInt([34, 15, 88, 2]));
console.log(finder.findSmallestInt([34, -345, -1, 100]));