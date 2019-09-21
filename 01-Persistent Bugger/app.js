/*
  Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
*/


function persistence(num) {
  let numbers = [];
  let persistence = 0;

  // Convert num to array of numbers
  numbers = convert_to_array_of_integers(num);
  
  // Get the length of digits
  let numbersLength = numbers.toString();

  // While the length of digits of the number is greater than 1
  while( numbersLength.length>1 ) {
    // Multiply contents of the numbers array
    product = numbers.reduce(function(a,b){return a*b;});

    // Convert num to array of numbers
    numbers = convert_to_array_of_integers(product);

    // Get the length of digits of the new number
    numbersLength = numbers.toString();

    // Increase persistence count
    persistence++;
  }

  return persistence;
}

function convert_to_array_of_integers(num) {
  var numbers = [];
  let sNum = num.toString();

  for ( let i=0, len=sNum.length; i<len; i++ ) {
    numbers.push(parseInt(sNum.charAt(i)));
  }

  return numbers;
}

console.log( persistence(39) );
console.log( persistence(999) );
console.log( persistence(4) );
console.log( persistence(2435950) );
