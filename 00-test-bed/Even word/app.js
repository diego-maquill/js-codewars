function deleteCharacters(n, str) {
    //Solution
    n = str.length;
    var newString = str.split("")
    var sameletters = newString.reduce(function (a, b) {
        return (a === b) ? a : NaN
    });
    //if (!newString.every(v => v === newString[0])) {
    if (sameletters) {
        return newString.join("");
    }
    if (!sameletters) {
        if (n % 2 == 0) {
            str = newString.slice(0, -2);
        }
        if (n % 2 != 0) {
            str = newString.slice(0, -1);
        }
        return str.join("");
    }
    // return str
}
console.log(deleteCharacters(7, "gfgdfhg"));
console.log(deleteCharacters(6, "axxaxa"));
console.log(deleteCharacters(8, "cdfdgdfg"));
console.log(deleteCharacters(4, "aaaa"));
console.log(deleteCharacters(7, "gfgdfhg"));
console.log(deleteCharacters(8, "gfgdfhgf"));




