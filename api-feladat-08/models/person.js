const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    vaccine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vaccine',
    },
    count: Number,
}, {
    timeStamps: true
});

const Person = mongoose.model("Person", personSchema);


module.exports = Person;
