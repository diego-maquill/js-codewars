/* 
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are n=8 socks with colors arr=[10, 20, 30, 20, 30, 10, 30, 30]. There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
*/
function twoSum(arr, k) {
    var map = [];
    var indexnum = [];

    for (var x = 0; x < arr.length; x++) {
        if (map[arr[x]] != null) {
            var index = map[arr[x]];
            indexnum[0] = index;
            indexnum[1] = x;
            break;
        }
        else {
            map[k - arr[x]] = x;
        }
    }
    return indexnum;
}
console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 50));
/*
function sockMerchant(k, arr) {
    let sorted = arr.sort((a, b) => a - b);
    let pairs = 0;

    for (let i = 0; i < k - 1; i++) {
        if (sorted[i] === sorted[i + 1]) {
            pairs++;
            i += 1;
        }
    }
    return pairs;
}

console.log(sockMerchant(8, [10, 20, 30, 20, 30, 10, 30, 30]));//4
*/