/*
This kata is designed to test your ability to extend the functionality of built-in ruby classes. In this case, we want you to extend the built-in Array class with the following methods: `square()`, `cube()`, `average()`, `sum()`, `even()` and `odd()`.
*/

Array.prototype.square = function() {
  let result = [];
  this.map( (x) => {
    result.push(Math.pow(x,2));
  });
  return result;
}

Array.prototype.cube = function() {
  let result = [];
  this.map( (x) => {
    result.push(Math.pow(x,3));
  });
  return result;
}

Array.prototype.average = function() {
  return this.sum() / this.length;
}

Array.prototype.sum = function() {
  let result = 0;
  this.map( (x) => {
    result += x;
  });
  return result;
}

Array.prototype.even = function() {
  let result = [];
  this.map( (x) => {
    if (x%2===0) result.push(x);
  });
  return result;
}

Array.prototype.odd = function() {
  let result = [];
  this.map( (x) => {
    if (x%2!==0) result.push(x);
  });
  return result;
}

var numbers = [1, 2, 3, 4, 5];
console.log( numbers.square() ); // must return [1, 4, 9, 16, 25]
console.log( numbers.cube() ); // must return [1, 8, 27, 64, 125]
console.log( numbers.average() ); // must return 3
console.log( numbers.sum() ); // must return 15
console.log( numbers.even() ); // must return [2, 4]
console.log( numbers.odd() ); // must return [1, 3, 5]