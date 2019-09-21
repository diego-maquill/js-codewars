function operation(number, operation) {
  // If operation is not undefined, return the number
  // Else return call the operation
  return (operation) ? operation.call(operation, number) : number;
}

function zero(op) {return operation(0, op);}
function one(op) {return operation(1, op);}
function two(op) {return operation(2, op);}
function three(op) {return operation(3, op);}
function four(op) {return operation(4, op);}
function five(op) {return operation(5, op);}
function six(op) {return operation(6, op);}
function seven(op) {return operation(7, op);}
function eight(op) {return operation(8, op);}
function nine(op) {return operation(9, op);}

function plus(operandB) {
  return function(operandA) { // Operand A is the second argument of operation.call(operation, number)
    return operandA + operandB;
  }
}
function minus(operandB) {
  return function(operandA) { // Operand A is the second argument of operation.call(operation, number)
    return operandA - operandB;
  }
}
function times(operandB) {
  return function(operandA) { // Operand A is the second argument of operation.call(operation, number)
    return operandA * operandB;
  }
}
function dividedBy(operandB) {
  return function(operandA) { // Operand A is the second argument of operation.call(operation, number)
    return operandA / operandB;
  }
}

console.log( seven(times(five())) ); // 35
console.log( four(plus(nine())) ); // must return 13
console.log( eight(minus(three())) ); // must return 5
console.log( six(dividedBy(two())) ); // must return 3