function kira(a, b, c) {
  let biggestRemainder = 0;
  // Mod each index element of a with b to get the biggest remainder
  for(let i=0; i<a.length; i++) {
    remainder = a[i] % b[i];
    if (remainder>biggestRemainder) biggestRemainder = remainder;
  }
  // If biggest remainder is even, return string in small letters
  if(biggestRemainder%2===0) return c.toLowerCase();
  // Otherwise, return string in capital letters
  else return c.toUpperCase();
}

console.log( kira([16, 16], [10, 5], 'Doctor') ); // doctor