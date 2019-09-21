// Only worked for simple test
function dim() {

  // Value of each element in basic array
  value = arguments[arguments.length-1];
  // Number of values per basic array
  numberOfValues = arguments[arguments.length-2];

  // Generate basic array with null values
  let basic_array = [];
  for(let i=0; i<numberOfValues; i++) {
    // If value is actually a function, call the function
    if (typeof value === 'function'){
      basic_array.push(value.call());
    }
    // Otherwise, just push the value
    else {
      basic_array.push(value);
    }
  }

  // Initialise nested array with just the basic array
  let nested_array = JSON.parse(JSON.stringify(basic_array)); //basic_array.slice(); // Slice() to clone the array as a new instance
  // Loop from argument index 0 up to the 2nd to the last argument
  for(let i=0; i<arguments.length-2; i++) {
    let inner_array = [];
    for(let j=0; j<arguments[i]; j++) {
      // Push the current nested array inside the inner array
      inner_array.push(JSON.parse(JSON.stringify(nested_array)));//nested_array.slice()); // Slice() to clone the array as a new instance
    }
    // Create the new inner_array as a unique instance of the nested array
    nested_array = JSON.parse(JSON.stringify(inner_array));  // Clone the array as a new instance using JSON.parse because it just works
  }
  
  return nested_array;
}

// console.log( dim( 3,3,"x" ) ); // => [['x','x','x'],['x','x','x'],['x','x','x']]

// console.log( dim( 2,2,2,0 ) ); // => [ [  [0,0],[0,0]  ],[  [0,0],[0,0]  ] ]

// console.log( dim( 3, true ) ); // => [true,true,true]

// var xxx=function(){ return "xX" }
// console.log( dim( 2,5,xxx ) ); // => [['xX','xX','xX','xX','xX'],['xX','xX','xX','xX','xX']]

// var d2 = dim(3,2,3,0);
// d2[0][0][0]="A";
// console.log(d2);

var rnd=function(){ return (~~Math.random()*3) }
console.log( dim( 3,2,rnd ) ); // => (depends on results of rnd) 