/*
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.
In effect: 89 = 8^1 + 9^2
The next number in having this property is 135.
See this property again: 135 = 1^1 + 3^2 + 5^3
We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above. 
 */
function sumDigPow(a, b) {
  var ans = [];
  while (a <= b) {
    // the start of the index is 0 because from [1-9] 0^1+1^1=1 and so on.....
    if (a.toString().split('').reduce((x, y, i) => x + (parseInt(y) ** (i + 1)), 0) == a)
      ans.push(a);
    a++;
  }
  return ans;
}

/*
function sumDigPow(a, b) {
  var arr = [];
  for (var i = a; i <= b; i++) {
    var sum = 0;
    for (var j = 0; j <= String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j+1);
      if (sum == i) arr.push(i);
    }
  }
  return arr;
}
*/
console.log(sumDigPow(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100))// [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(10, 100))// [89]
console.log(sumDigPow(90, 100))// []
console.log(sumDigPow(90, 150)) //[135]
console.log(sumDigPow(50, 150)) //[89, 135]
console.log(sumDigPow(10, 150)) //[89, 135]
console.log(sumDigPow(10, 1000)) //[89, 135]
