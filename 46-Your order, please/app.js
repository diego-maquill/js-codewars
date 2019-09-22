function order(words) {
    // ...
    var array = [];
    words = words.split(" ");
    var j = 1;
    for (var i = 0; i < words.length; i++) {
        if (words[i].indexOf(j) > -1) {
            array.push(words[i]);
            j++;
            i = -1;
        }
    }
    return array.join(" ");
}
console.log(order("Yo4nas Tho8mas mi5ke is2 Thi1s T6est 3a "));