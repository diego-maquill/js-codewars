function solve(s) {
  // Remove all non-numbers in the string and convert to array of numbers
  numbers = s.replace(new RegExp("[^0-9]+", "g"), " ").split(" ");
  // Find the biggest number in the array
  let biggestNumber = 0;
  for (n in numbers) {
    // Convert number to integer
    currentNumber = parseInt(numbers[n]);
    // If biggest number is lower than current number, overwrite biggest number
    if (biggestNumber < currentNumber) {
      biggestNumber = currentNumber;
    }
  }
  return biggestNumber;
}
console.log(solve("gh12cdy695m1")); //,695);
console.log(solve("2ti9iei7qhr5")); //,9);
console.log(solve("vih61w8oohj5")); //,61);
console.log(solve("f7g42g16hcu5")); //,42);
console.log(solve("lu1j8qbbb85")); //,85);
