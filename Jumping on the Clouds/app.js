function jumpingOnClouds(c) {
    let len = c.length
    var jumps = 0;
    for (let i = 1; i < len; i++) {
        if (c[i] === 0) {
            if (!c[i - 1] && c[i + 1] === 0) {
                jumps++;
                ++i;
                continue;
            }
            jumps++;
        } else if (c[i] && c[i + 1]) {
            break;
        }
    }
    return jumps;
}
/* 
function jumpingOnClouds(c) {
    var stepsArray = [];
    let i = 0;
    while (i < c.length - 1) {
        if ((i + 2 < c.length) && (c[i + 2] === 0)) {
            stepsArray.push(c[i + 2]);
            i = i + 2;//i += 2;
        } else {
            stepsArray.push(c[i + 1]);
            i += 1;
        }
    }
    return stepsArray.length

}
 */
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));

/*
function jumpingOnClouds(c) {
    var nElements = c.length
    var newArray = [];
    for (var i = 0; i <= nElements; i++) {
        if (c[i] != 0) {
            newArray = c.push(i);
            var nnAe = newArray.length
        }
    }
    return nnAe;
} */