function sortByName(ary) {
  let numbers = [];
  let number_words = [];
  let sorted_number_words = [];
  let sorted_numbers = [];

  // Convert each number into numerical words
  ary.map( (num) => {
    number_words.push(inWords(num));
  });

  // Keep a copy of the unsorted array
  sorted_number_words = number_words.slice();
  // Sort array of numerical words
  sorted_number_words.sort();

  // For each word in the sorted array
  sorted_number_words.map( (word) => {
    // Using the unsorted array, find the index of the current word
    // and retrieve its number from the input array
    sorted_numbers.push(ary[number_words.indexOf(word)]);
  });
console.log(sorted_number_words);
  return sorted_numbers
}


let inWords = (num) => {
  let a = ['', 'one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

  if ((num = num.toString()).length > 9) return 'overflow';
  n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return; var str = '';
  str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
  str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
  str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
  str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
  str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';

  // If string is blank, check if number is zero
  if( str === '' ){
    str = (n[1] == 0) ? 'zero' : '';
  }
  return str;
}

console.log( sortByName([8, 8, 9, 9, 10, 10]) );//, [8, 8, 9, 9, 10, 10]);
console.log( sortByName([1, 2, 3, 4]) );//, [4, 1, 3, 2]);
console.log( sortByName([9, 99, 999]) );//, [9, 999, 99]);
console.log( sortByName([0,1]));