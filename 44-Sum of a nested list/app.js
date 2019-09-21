const sumNested = arr => {
  // Flatten array until every element is not an array
  arr = flatten(arr)
  // Return the sum of the array
  return arr.reduce( (sum,value) => sum+value, 0 )
};

// Flatten array until every element is not an array
function flatten(arr) {
  const flattened = arr.reduce( (a, b) => a.concat(b), [] );
  if (objectInArray(flattened)) return flatten(flattened)
  return flattened
}

// Return true if there is an array in the array
function objectInArray(arr) {
  let objectFound = false
  arr.map( a => { if(typeof a==='object') objectFound = true })
  return objectFound
}

console.log(sumNested([1, [2, [3, [4]]]]))

// const {assert} = require("chai");

// describe("sumNested", function() {
//   it("should handle non-nested lists", function() {
//     assert.strictEqual(sumNested([1]), 1);
//     assert.strictEqual(sumNested([1, 2, 3, 4]), 10);
//     assert.strictEqual(sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55);
//   });
//   it("non-nested edge case", function() {
//     assert.strictEqual(sumNested([]), 0);
//   });
//   it("should handle simple nestings", function() {
//     assert.strictEqual(sumNested([[1], []]), 1);
//     assert.strictEqual(sumNested([[1, 2, 3, 4]]), 10);
//   });
//   it("should handle more complex nestings", function() {
//     assert.strictEqual(sumNested([1, [1], [[1]], [[[1]]]]), 4);
//     assert.strictEqual(sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]]), 8);
//   });
//   it("complex nesting edge case", function() {
//     assert.strictEqual(sumNested([[[[], [], [[[[[[[[[[]]]]]]]]]]], [], [], [[[], [[]]]]], []]), 0);
//   });
// });