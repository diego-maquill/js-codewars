function getNumbers(row, k) {
    if (k < 0 || k >= row.length) {
        return 0;
    }
    return row[k];
}
function getRow(rowIndex) {
    var row = [1];
    for (var i = 0; i < rowIndex; i++) {
        var newRow = new Array(i + 1);
        for (var k = 0; k <= i + 1; ++k) {
            var digit = getNumbers(row, k - 1) + getNumbers(row, k);
            newRow[k] = digit //    newRow.push(digit);
        }
        row = newRow;
    }
    return row;
}
console.log(getRow(3));
