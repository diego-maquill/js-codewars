let extend = function() {
  let objectsFirstInstance = {};
  // For every argument
  for (let a in arguments) {
    // Check if the argument is of type object
    if (typeof arguments[a] === "object") {
      // For every value on that object
      for (let o in arguments[a]) {
        // Check if the key-value pair already exists in objectsFirstInstance
        if (objectsFirstInstance[o] === undefined) {
          // If not, store the key-value pair in objectsFirstInstance
          objectsFirstInstance[o] = arguments[a][o];
        }
      }
    }
  }
  return objectsFirstInstance;
}
// extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
// extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
// extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
console.log(extend({ a: false, b: null }, { a: true, b: 2, c: 3 })); // should  === {a: false, b: null, c: 3}
