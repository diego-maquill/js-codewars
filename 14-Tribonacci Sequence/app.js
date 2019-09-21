function tribonacci(signature,n) {
  if(n===null||signature===null||n===0||signature.length<3) return [];

  let array_of_signatures = signature;

  // While length of output array is less than n
  while(array_of_signatures.length<n) {
    // Append the sum of the current signature
    array_of_signatures.push(sum_of_array(signature));
    // Create a new signature from the last 3 digit of the output array
    signature = array_of_signatures.slice(array_of_signatures.length-3, array_of_signatures.length);
  }
  // Return only array positions from the specified size n
  return array_of_signatures.slice(0,n);
}

// Function to compute the sum of an array
const sum_of_array = (signature) => {
  return signature.reduce((sum, value) => sum + value, 0);
}

console.log(tribonacci([1,1,1],10)); // [1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([0,0,1],10)); // [0,0,1,1,2,4,7,13,24,44]))
console.log(tribonacci([1,1,1],1)); // [1]