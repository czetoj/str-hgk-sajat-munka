const utils = require('./utils');

console.log(utils.generateUserList([{
    firstName: 'József',
    lastName: 'Czető',
    age: 19
},
{
    firstName: 'Lilla',
    lastName: 'Kovács',
    age: 19
}
]))
console.log(utils.getUserNames([{
    firstName: 'József',
    lastName: 'Czető',
    age: 19
},
{
    firstName: 'Lilla',
    lastName: 'Kovács',
    age: 19
}
]))