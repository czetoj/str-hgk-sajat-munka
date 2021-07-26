const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')
const personController = require('../controllers/person.controller');

router.get('/', controller.getIndex)
router.get('/person/count', personController.getCount)
router.get('/person/count/json', personController.getCountJSON)
router.get('/person/vaccinated', personController.getVaccinated)
router.get('/person/vaccinated/json', personController.getVaccinatedJSON)


module.exports = router;