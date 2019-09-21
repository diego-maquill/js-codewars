function cardsConverter(input){
  if (typeof input!=='object') return null;

  let suits = ['c','d','h','s'];
  let cards = ['A','2','3','4','5','6','7','8','9','T','J','Q','K'];
  let convertedArray = [];
  let numberSorter = (a, b) => {return a - b;}

  // If input is an array of numbers
  if(typeof input[0]==='number') {
    // Sort the numbers
    input.sort( numberSorter );
    // Find each equivalent card of the number
    input.map(function(num) {
      suit = Math.floor(num / 13);
      card = num - (13 * suit);
      convertedArray.push( cards[card]+suits[suit] );
    });
  }
  // If input is an array of strings
  else if(typeof input[0]==='string') {
    // Find each equivalent value of the card
    input.map(function(symbol) {
      card = symbol.charAt(0); // Card is 1st character
      suit = symbol.charAt(1); // Suit is 2nd character
      value = (suits.indexOf(suit)*13) + cards.indexOf(card);
      convertedArray.push( value );
    });
    // Sort the numbers
    convertedArray.sort( numberSorter );
  }

  return convertedArray;
}

console.log( cardsConverter([50, 6, 13,30, 37]));//, ["7c", "Ad", "5h", "Qh", "Qs"], 'should return ["7c", "Ad", "5h", "Qh", "Qs"]');
console.log( cardsConverter(["5h", "7c", "Qh", "Qs", "Ad"]));//, [6, 13, 30, 37, 50], 'should return [6, 13, 30, 37, 50]');