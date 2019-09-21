function findEvenIndex(arr) {
  if (arr.length === 0) return 0;

  let sumOfArray = arrayOfNumbers => {
    // Calculate sum of array, initialising result to 0
    return arrayOfNumbers.reduce((sum, value) => sum + value, 0);
  };

  let sum_left = 0
  let sum_right = 0
  
  // i is the position of the index
  for (let i=0; i<arr.length; i++) {
    // left is the array left of i
    let left = arr.slice(0, i);
    // right is the array right of i
    let right = arr.slice(i+1, arr.length);

    // If position greater than 0, get sum of left array
    if (i>0) sum_left = sumOfArray( left );
    else sum_left = 0;

    // If position less than last index position, get sum of right array
    if (i<arr.length-1) sum_right = sumOfArray( right );
    else sum_right = 0;

    if (sum_left===sum_right) return i;
    else if (i==arr.length-1) return -1;
  }
  return -1;
}

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3


// Expected: 136
console.log( findEvenIndex([6990,-454,2278,1099,-7181,-4475,-762,-3211,-229,2120,-8481,-6469,8060,-4390,-1042,2801,-5461,1627,-960,-7255,-5236,-2997,848,-5055,-7296,4772,2987,-764,-477,-7232,1879,-7873,-7642,7300,2037,-3975,8220,-534,2247,-4727,7297,-6038,-4157,3747,-8349,1633,-5680,9158,-1188,-1514,9388,1172,4716,1696,-610,303,9311,-5935,-4926,-3242,8408,-8511,3581,6085,-8021,1948,-9669,-2245,-8603,-8782,-8250,-4097,-9302,9437,-5810,1857,-975,9408,-1720,9586,-7183,-1956,-8706,-8330,2839,2304,-7804,9017,6809,-1086,-8696,6470,-3403,7229,4744,-9133,491,-4241,2116,7716,-4646,6132,-8640,3518,6777,5322,4986,5851,5211,-1027,5584,-8297,-8818,-6894,-8944,-8026,-5165,5380,-5342,-6515,-7713,-7630,1452,6779,9009,4988,-5625,5280,4394,9583,2040,-7159,6646,-4164,1759,2985,2691,842,-9079,9397,-1947,7093,-6418,-1164,4900,-6789,3848,-6356,-73865]) );