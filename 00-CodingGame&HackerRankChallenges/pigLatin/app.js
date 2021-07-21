function pigIt(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Is this my string ?'));