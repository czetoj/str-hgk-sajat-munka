
const createError = require('http-errors');
const Person = require('../models/person')

exports.getCount = async (req, res) => {
    let people = await Person.find()
    let result = people.filter(item => item.vaccine !== "").length
    res.render('count', { result: result })
};

exports.getCountJSON = async (req, res) => {
    let people = await Person.find()
    let result = people.filter(item => item.vaccine !== "").length
    res.json(result)
};

exports.getVaccinated = async (req, res) => {
    let people = await Person.find()
    let result = people.filter(item => item.vaccine !== "")
    res.render('vaccinated', { result: result })
};

exports.getVaccinatedJSON = async (req, res) => {
    let people = await Person.find()
    let result = people.filter(item => item.vaccine !== "")
    res.json(people)
};

exports.getVaccinatedId = async (req, res, next) => {
    const person = await Person.findById(req.params.id);
    if (!person) {
        return next(new createError.NotFound("Person not found"));
    }
    if (person.vaccine) {
        res.json(person.vaccine);
    } else {
        res.json(false);
    }
}

exports.postPerson = (req, res, next) => {
    const { lastName, firstName, vaccine } = req.body;
    if (!lastName || !firstName || !vaccine) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newPerson = new Person({
        firstName: firstName,
        lastName: lastName,
        vaccine: vaccine
    });

    Person.insertOne(newPerson)
        .then(data => {
            res.status(201);
            res.json(data);
        });
}

exports.putId = async (req, res, next) => {
    const id = req.params.id
    const vaccine = req.params.vaccine

    const person = await Person.findById(req.params.id);
    if (!person) {
        return next(new createError.NotFound("Person is not found"));
    }

    if (!lastName || !firstName || !vaccine) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        firstName: person.firstName,
        lastName: person.lastName,
        vaccine: vaccine
    };

    let personWithVaccine = {};
    try {
        personWithVaccine = await Person.findByIdAndUpdate(id, update, {
            new: true,
            useFindAndModify: false
        });
    } catch (err) {
        return next(new createError.BadRequest(err));
    }

    return res.json(personWithVaccine);
}

exports.deletePersonsWithVaccineName = async (req, res, next) => {
    const vaccine = req.params.vaccine

    if (!vaccine) {
        return next(new createError.NotFound("Vaccine not found"));
    }

    const people = await Person.find();
    let result = people.filter(item => item.vaccine === vaccina);
    let resultIdArray = result.map(item => item.id);

    try {
        resultIdArray.forEach(async (item) => {
            await Person.findByIdAndDelete(item);
        })
    } catch (err) {
        return next(new createError.NotFound("Vaccine is not found"));
    }

    res.json(result)
}