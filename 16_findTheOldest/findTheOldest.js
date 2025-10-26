const findTheOldest = function(peopleArray) {
    let sortedArray = peopleArray.sort((a, b) => {
        a.yearOfDeath ??= new Date().getFullYear();
        b.yearOfDeath ??= new Date().getFullYear();
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    });
    return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
