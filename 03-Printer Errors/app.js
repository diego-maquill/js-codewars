/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from a to z.
*/

function printerError(s) {
  const letters = Array.from("abcdefghijklm");
  const total = s.length;
  var bad = 0;
  
  // For every character in the string
  for (let i = 0, len = s.length; i < len; i++) {
    // Check if the character is part of letters a to m (good control strings)
    if ( !letters.includes(s.charAt(i)) ) {
      bad++; // Increment bad string count
    }
  }
  return `${bad}/${total}`;
}

s="aaabbbbhaijjjm"
console.log( printerError(s) ); // => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
console.log( printerError(s) ); // => "8/22"