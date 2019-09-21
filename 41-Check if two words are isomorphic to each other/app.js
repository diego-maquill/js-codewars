// Two strings a and b are called isomorphic if there is a one to one mapping possible for every character of a to every character of b. And all occurrences of every character in a map to same character in b.

function isomorph(a, b) {
  if( a.length !== b.length ) return false  // a and b should be of the same length
  
  // Every letter in word1 should be unique to word2
  function checkUniqueMapping(word1, word2) {
    let words = {}
    return word1.split('').map( (letter, i) => {
      // If letter is not found in words, create new mapping
      if ( !(letter in words) ) {
        words[letter] = word2.charAt(i)
        return true
      }
      // If a mapping has been done before, ensure that it is the same mapping
      else if( letter in words && words[letter] == word2.charAt(i)) return true
      // Otherwise, the mapping is not unique
      else return false
    })
  }

  if(checkUniqueMapping(a, b).indexOf(false)>-1) return false // Check a against b
  if(checkUniqueMapping(b, a).indexOf(false)>-1) return false // Check b against a
  else return true
}

console.log( isomorph('CBAABC', 'DEFFED') )
console.log( isomorph('RAMBUNCTIOUSLY', 'THERMODYNAMICS') )
console.log( isomorph('AB', 'CC') )
console.log( isomorph('ABAB', 'CD') )
console.log( isomorph("SEE", "SAW") )