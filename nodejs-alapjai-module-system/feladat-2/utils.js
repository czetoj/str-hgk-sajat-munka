const returnArray = [];
const generateUserList = (userArray) => {
    userArray.map((item, index) => {
        returnArray[index] = { isAdult: item.age > 18 };
        returnArray[index].fullName = item.firstName + ' ' + item.lastName;
    })
    return returnArray;
}
let string = '';

const getUserNames = (userArray) => {
    userArray.forEach(item => string += item.firstName + ' ' + item.lastName + ', ');
    return string;
}

module.exports = Object.freeze({
    generateUserList,
    getUserNames
})