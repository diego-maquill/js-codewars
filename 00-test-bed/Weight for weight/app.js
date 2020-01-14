function orderWeight(strng) {
    var sum = 1;
    let splitstrng = strng.split('');
    
    var numbers = 0;

    for (var i = 0; i < strng.length; i++) {
        sum = sum + strng[i];

    }

    //strng.toString().split('').reduce(())


    return sum;
}

console.log(orderWeight(2345));