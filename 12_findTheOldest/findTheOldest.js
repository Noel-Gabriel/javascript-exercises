const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let ageOldest = age(oldest.yearOfBirth, oldest.yearOfDeath);
        let agePerson = age(person.yearOfBirth, person.yearOfDeath);
        return (ageOldest > agePerson)? oldest : person;
    });
}

function age(birth, death) {
    if(death === undefined) {
        return 2024-birth;
    }
    return death-birth;
}
// Do not edit below this line
module.exports = findTheOldest;
