/*
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word){
  word_array = word.split('');
  result = '';
  for(let i=0, len=word_array.length; i<len; i++) {
    // Find all letter matches in the word, ignore case
    let letter = escapeRegExp(word_array[i]);
    let letter_match = new RegExp(letter,'ig');
    // If the count of each letter match > 1, append ) to result string else append (
    result += word.match(letter_match).length > 1 ? ')' : '(';
  }
  return result;
}

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

console.log(duplicateEncode("din"));// => "((("
console.log(duplicateEncode("recede"));// => "()()()"
console.log(duplicateEncode("Success"));// => ")())())"
console.log(duplicateEncode("(( @"));// => "))(("