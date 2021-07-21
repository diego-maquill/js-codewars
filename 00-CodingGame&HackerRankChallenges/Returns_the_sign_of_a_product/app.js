/* 

*/
function returnsTheSignOfaProduct(array) {
    var result = 1;
    for (var i = 0; i < array.length; i++) {
        result = result * array[i];
    }
    if (result == 0) {
        return 0;
    }
    if (result < 0) {
        return -1;
    }
    if (result > 0) {
        return 1;
    }
    //return result;
}
console.log(returnsTheSignOfaProduct([-2, 1, -2]));