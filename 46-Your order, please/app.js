/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/
function order(words) {
    // .create and array
    var array = [];
    //split string
    words = words.split(" ");
    var j = 1; // create starting index 1
    for (var i = 0; i < words.length; i++) {//start a loop for the string length
        if (words[i].indexOf(j) > -1) {// if word[i] containg index 1 is greater than the last index(-1) 
            array.push(words[i]); //push words to empty array=[];
            j++; //index[j] increment++ 
            i = -1; // after comparing go thru the array again.
        }
    }
    return array.join(" ");//join words
}
console.log(order("Yo4nas Tho8mas mi5ke is2 Thi1s T6est 3a "));