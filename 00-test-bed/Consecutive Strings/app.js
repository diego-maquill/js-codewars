/*
You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/
function longestConsec(strarr, k) {
    var longest = "";
    for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
        var tempArray = strarr.slice(i, i + k);
        var tempStr = tempArray.join("");
        if (tempStr.length > longest.length) {
            longest = tempStr;
        }
    }
    return longest;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2));
//returns => "abigailtheta"
console.log(longestConsec([], 3));
//returns =>""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3))
//returns -=> "ixoyx3452zzzzzzz"
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)); //, "")