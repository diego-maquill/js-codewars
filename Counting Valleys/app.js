function countingValleys(n, s) {

    var numbersOfValleys = 0;
    var numbersOfMOuntains = 0;
    var currentHeight = 0;

    for (i = 0; i < n; i++) {
        if (s[i] === 'U') {
            currentHeight++;
            if (currentHeight === 0) {
                numbersOfValleys++;
            }
        } else if (s[i] === 'D') {
            currentHeight--;
            if (currentHeight === 0) {
                numbersOfMOuntains++;
            }
        }
    }
    return numbersOfValleys;
}

console.log("You went into", countingValleys(10, 'UDUUUDUDDD'), "valleys");