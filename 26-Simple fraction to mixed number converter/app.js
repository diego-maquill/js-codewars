function mixedFraction(s) {
  let fraction = s.split("/");
  if (fraction[1] === "0") throw "zero division error";
  else if (fraction.length > 2) throw "invalid fraction";
  else if (fraction[0] === "0") return "0";
  else {
    let simplifiedFraction = "";
    let result = "";

    // Determine if the resulting value will become a negative
    let negative =
      (fraction[0].charAt(0) === "-" && fraction[1].charAt(0) !== "-") ||
      (fraction[1].charAt(0) === "-" && fraction[0].charAt(0) !== "-");
    // Append a negative sign to the result if the result number will be negative
    if (negative) result += "-";
    // Get the numerator and denominator
    let numerator = Math.abs(parseInt(fraction[0]));
    let denominator = Math.abs(parseInt(fraction[1]));
    // Get the quotient of numerator divided by denominator
    let decimalValue = numerator / denominator;
    // Get the whole number form the quotient
    let wholeNumber = parseInt(decimalValue);
    // Get the decimal value of the fraction (e.g. 2/3 = 0.667)
    let fractionValueOfDecimal = Math.abs(decimalValue - wholeNumber);

    // If it's a proper fraction and there is a whole number  (e.g. 4 2/3)
    if (numerator < denominator && wholeNumber != 0) {
      
      // Convert the decimal value to fraction (e.g. 0.667 = 66/100)
      let n = parseInt(fractionValueOfDecimal * 100);
      let d = 100;
      // Redeuce the fraction (e.g. 66/100 = 2/3)
      if (fractionValueOfDecimal > 0)
        simplifiedFraction = simplifyFraction(n, d);
      // Produce final output (i.e. 4 2/3)
      result += `${wholeNumber} ${simplifiedFraction}`.trim();
    
    // Otherwise if it's an improper fraction or there is no whole number  (e.g. 6/3, 10/7)
    } else {
      // Get the remainder of numerator div by denominator (e.g. 10%7 = 3)
      let n = numerator % denominator; // remainder
      // If the quotient value of numerator/denominator is greater than 0, reduce the fraction (e.g. 4/6 = 2/3)
      if (fractionValueOfDecimal > 0)
        simplifiedFraction = simplifyFraction(n, denominator);
      // If the whole number is not 0, produce final output as (i.e. 4 2/3)
      if (wholeNumber != 0) {
        result += `${wholeNumber} ${simplifiedFraction}`.trim();
      // Otherwise, produce final output as (i.e. 2/3)
      } else {
        result += simplifiedFraction;
      }
    }
    return result;
  }
}

// Function to reduce a fraction
let simplifyFraction = (numerator, denominator) => {
  let gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  let simpleNumerator = numerator / gcd(numerator, denominator);
  let simpleDenominator = denominator / gcd(numerator, denominator);
  return `${simpleNumerator}/${simpleDenominator}`;
};

console.log(mixedFraction(`42/9`)); //expected result: `4 2/3`.
console.log(mixedFraction(`6/3`)); //expedted result: `2`.
console.log(mixedFraction(`4/6`)); //expected result: `2/3`.
console.log(mixedFraction(`0/18891`)); //expected result: `0`.
console.log(mixedFraction(`-10/7`)); //expected result: `-1 3/7`.
console.log(mixedFraction(`-10/7`)); //expected result: `-1 3/7`.
// console.log( mixedFraction(`0/0`) ); // must raise a zero division error.
// console.log( mixedFraction(`3/0`) ); // must raise a zero division error.

console.log(mixedFraction("-22/-7")); //, '3 1/7');
