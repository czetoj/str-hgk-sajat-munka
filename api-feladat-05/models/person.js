const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    vaccine: String
}, {
    timeStamps: true
});

const Person = mongoose.model("Person", personSchema);


module.exports = Person;
