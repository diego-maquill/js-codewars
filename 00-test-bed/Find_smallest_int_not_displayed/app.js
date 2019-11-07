function SmallestIntegerFinder(A) {
    // only positive values, sorted
    A = A.filter(x => x >= 1).sort((a, b) => a - b)
    let x = 1
    for (let i = 0; i < A.length; i++) {
        // if we find a smaller number no need to continue, cause the array is sorted
        if (x < A[i]) {
            return x
        }
        x = A[i] + 1
    }
    return x
}
console.log(SmallestIntegerFinder([34, 15, 88, 2]));
console.log(SmallestIntegerFinder([34, -345, -1, 100]));
console.log(SmallestIntegerFinder([1, 3, 6, 4, 1, 2]));
console.log(SmallestIntegerFinder([-1, -3]));