const data = require('../database/person.json')

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