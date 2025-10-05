const palindromes = function (string) {
    let arr = [];
    for(let i = 0; i < string.length; i++) {
        if(string[i] != " " && string[i] != "." && string[i] != "," && string[i] != "!" && string[i] != "?") {
            arr.push(string[i].toLowerCase());
        }
    }
    return arr.join("") === arr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
