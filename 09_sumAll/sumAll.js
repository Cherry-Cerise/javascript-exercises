const sumAll = function(num1, num2) {
    let sum = 0;
    if (typeof(num1) != "number" || typeof(num2) != "number" || Math.floor(num1) != num1 ||  Math.floor(num2) != num2 || num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else if (num2 < num1) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
