/*
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/

function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''));
}

console.log( descendingOrder(21445) ); // Output: 54421
console.log( descendingOrder(145263) ); // Output: 654321
console.log( descendingOrder(1254859723) ); // Output: 9875543221