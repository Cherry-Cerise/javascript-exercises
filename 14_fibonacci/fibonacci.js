const fibonacci = function(nthNumber) {
    nthNumber = +nthNumber;
    if(nthNumber < 0) return "OOPS";
    const sequence = [0, 1,];
    for(i = 2; i <= nthNumber; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence[nthNumber];
};

// Do not edit below this line
module.exports = fibonacci;
