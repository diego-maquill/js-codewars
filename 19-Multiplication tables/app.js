/*
Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.
*/

function multiplicationTable(row, col) {
  let rows = [];
  // If inputs are less than 1, return empty array
  if (row < 1 && col < 1) return [];
  for (let i = 1; i <= row; i++) {
    // For every row
    let cols = []; // Reset columns
    for (let j = 1; j <= col; j++) {
      // For every col
      cols.push(j * i); // Multiply j and i then push as a new column
    }
    rows.push(cols); // Push columns to row
  }
  return rows;
}

console.log(multiplicationTable(2, 2)); // [[1,2],[2,4]])
console.log(multiplicationTable(3, 3)); // [[1,2,3],[2,4,6],[3,6,9]])
console.log(multiplicationTable(3, 4)); // [[1,2,3,4],[2,4,6,8],[3,6,9,12]])
console.log(multiplicationTable(4, 4)); // [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]])
console.log(multiplicationTable(2, 5)); // [[1,2,3,4,5],[2,4,6,8,10]])
