function high(x) {
  // Split the words to an array
  let words = x.split(" ");
  let highestScoringWord = "";
  let highestScore = 0;

  // For each word..
  words.map(function(word) {
    // Get the score of each word
    let score = wordScore(word);
    // If the score is beaten by points, copy value of points to score. Use current word as highest scoring word.
    if (score > highestScore) {
      highestScore = score;
      highestScoringWord = word;
    }
  });

  return highestScoringWord;
}

function wordScore(word) {
  const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  let score = 0;
  word.split("").map(function(letter) {
    // Get the score of each letter and total them as points
    score += alphabet.indexOf(letter.toUpperCase()) + 1;
  });
  return score;
}

console.log(high("man i need a taxi up to ubud")); //, 'taxi');
console.log(high("what time are we climbing up the volcano")); //, 'volcano');
console.log(high("take me to semynak")); //, 'semynak');
