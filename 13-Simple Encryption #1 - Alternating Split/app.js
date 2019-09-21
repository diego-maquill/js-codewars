/*
For building the encrypted string: Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String. Do this n times!
*/

function encrypt(text, n) {
  if (text===null || n===null || n<=0) { return text; }
  let input = text;
  let output = '';

  for(let x=0; x<n; x++) {
    output = '';
    let odd_chars = '';
    let even_chars = '';

    // Convert string to array
    array_of_text = input.split('');
    // For every character in the array
    array_of_text.map(function(value, index) {
      // Collect odd index characters to value
      if(index%2!=0) {
        odd_chars += value;
      }
      // Collect even index characters to value
      else {
        even_chars += value;
      }
    });
    // Concatenate odd chars and even chars
    output = odd_chars+even_chars
    input = output;
  }
  return output;
}

function decrypt(encryptedText, n) {
  if (encryptedText===null || n<=0) { return encryptedText; }
  let input = encryptedText;
  let output = '';

  for(let x=0; x<n; x++) {
    output = '';
    let odd_chars = '';
    let even_chars = '';
    
    // Convert string to array
    array_of_text = input.split('');
    length = array_of_text.length;
    half_length = Math.floor(length/2)

    // Latter half of string
    even_chars_array = array_of_text.slice(half_length,length);
    // First half of string
    odd_chars_array = array_of_text.slice(0,half_length);
    
    // Alternately append each character of the even_chars_array and odd_chars_array to output
    for(let i=0, len=half_length; i<len; i++) {
      output += even_chars_array[i]+odd_chars_array[i];
    }
    // If the length of the encryptedText is odd, get the last char of the even_chars_array and append to output
    if (length % 2 != 0) {
      output += even_chars_array[half_length];
    }
    input = output;
  }
  return output;
}

console.log( encrypt("This is a test!", 1) );// -> "hsi  etTi sats!"
console.log( encrypt("This is a test!", 2) );// -> "hsi  etTi sats!" -> "s eT ashi tist!"
console.log( decrypt("hsi  etTi sats!", 1) );// -> "This is a test!"