const data = require('../database/person.json')
const createError = require('http-errors');

exports.getCount = (req, res) => {
    let result = data.filter(item => item.vaccine !== "").length
    res.render('count', { result })
};

exports.getCountJSON = (req, res) => {
    let result = data.filter(item => item.vaccine !== "").length
    res.json(result)
};

exports.getVaccinated = (req, res) => {
    let result = data.filter(item => item.vaccine !== "")
    res.render('vaccinated', { result })
};

exports.getVaccinatedJSON = (req, res) => {
    let result = data.filter(item => item.vaccine !== "")
    res.json(result)
};

exports.getVaccinatedId = (req, res) => {
    const person = data.find(item => item.id === parseInt(req.params.id));
    if (!person) {
        return next(new createError.NotFound("Person not found"));
    }
    if (person.vaccine) {
        res.json(person.vaccine);
    } else {
        res.json(false);
    }
}

exports.postPerson = (req, res) => {
    const { lastName, firstName, vaccine } = req.body;
    if (!lastName || !firstName || !vaccine) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newPerson = req.body;
    newPerson.id = data[data.length - 1].id + 1;
    data.push(newPerson);
    res.status(201);
    res.json(newPerson);
}

exports.putId = (req, res) => {
    const id = req.params.id
    const vaccine = req.params.vaccine
    const index = data.findIndex(item => item.id === Number(id));
    const { firstName, lastName } = data[index];

    if (!lastName || !firstName || !vaccine) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    data[index] = {
        id,
        firstName,
        lastName,
        vaccine
    };

    res.json(data);
}

exports.deletePersonsWithVaccineName = (req, res) => {
    const vaccine = req.params.vaccine

    if (!vaccine) {
        return next(new createError.NotFound("Vaccine not found"));
    }

    let result = data.filter(item => item.vaccine !== vaccine);
    data = [...result]
    res.json(data)
}