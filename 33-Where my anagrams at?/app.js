function anagrams(word, words) {
  // Sort the word alphabetically
  let sortedWord = word.split("").sort().join("");
  let anagramList = [];
  words.map(function(w) {
    // Check each sorted word in the array against the sortedWord
    if ( sortedWord === w.split("").sort().join("") ) anagramList.push(w);
  });
  return anagramList;
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); //=> ['aabb', 'bbaa']

console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); //=> ['carer', 'racer']

console.log(anagrams("laser", ["lazing", "lazy", "lacer"])); //=> []
