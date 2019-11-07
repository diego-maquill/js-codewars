/* 
Move the first letter of each word to the end of it,
then add "ay" to the end of the word.Leave punctuation
marks untouched.
*/
//Code here

function pigIt(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
/* 
var notAllow = /[?!]/g;

function pigIt(str) {
    //Code here
    return str.split(' ').map(function (word) {
        if (word.match(notAllow)) {
            word = word + "";
        } else {
            word = word.slice(1) + word.charAt(0) + "ay";
        } /* else {
            word;
        } 
        return word;

    }).join(' ');
} */
console.log(pigIt('Pig latin is cool ?'));
console.log(pigIt('Pig latin is cool !'));
console.log(pigIt('Pig latin is cool?'));