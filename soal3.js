const printSegitiga = (num) => {
    if (typeof num !== 'number') {
        return 'data harus number'
    } let output = ''
    for (let i = num; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            output += j + ' '
        }
        output += '\n';
    }
    return output
}
console.log(printSegitiga(5))
console.log(printSegitiga('enam'))

