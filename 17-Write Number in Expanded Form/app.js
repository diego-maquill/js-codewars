/*
You will be given a number and you will need to return it as a string in Expanded Form.
*/

function expandedForm(num) {
  // Convert num to a string array
  let numStringArray = String(num).split('');
  // Get length of string array
  let len = numStringArray.length;
  let result = '';

  // For each digit in array
  numStringArray.map( (n,index) => {
    // Perform only if n > 0
    if( n>0 ) {
      // Add plus sign if result is not empty (for the next digits)
      if( result ) { result += ' + '; };

      // Pad zeros the right limited to array length minus current index
      result += n.padEnd(len-index,'0');
    }
  });

  return result;
}

console.log( expandedForm(12) ); // Should return '10 + 2'
console.log( expandedForm(42) ); // Should return '40 + 2'
console.log( expandedForm(70304) ); // Should return '70000 + 300 + 4'
console.log( expandedForm(9000000) );