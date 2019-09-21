/*
Your goal in this kata is to implement an difference function, which subtracts one list from another.

It should remove all values from list a, which are present in list b.

If a value is present in b, all of its occurrences must be removed from the other:
*/

function array_diff(a, b) {
  // Use array filter to check if every num in array a can be found in array b
  return a.filter(function(num) {
    // If num is not found in array b, return num
    if (!b.includes(num)) {
      return num;
    }
  });
}

console.log( array_diff([1,2],[1]) ); //== [2]
console.log( array_diff([1,2,2,2,3],[2]) ); //== [1,3]
