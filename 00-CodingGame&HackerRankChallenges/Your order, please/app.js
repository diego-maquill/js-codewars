/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/
// alternative and shorter solution to Your order, please problem
function order(words) {

    return words.split(' ').sort(
        function (a, b) {
            return a.match(/\d/) - b.match(/\d/); // where \d means a single digits[0-9]
        }).join(' ');
}
console.log(order("Yo4nas Tho7mas mi5ke is2 Thi1s T6est 3a "));