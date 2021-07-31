const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')
const personController = require('../controllers/person.controller');
const authenticateJwt = require('../auth/authenticate')
const adminOnly = require('../auth/adminOnly')

router.get('/', controller.getIndex)
router.get('/person/count', authenticateJwt, personController.getCount)
router.get('/person/count/json', authenticateJwt, personController.getCountJSON)
router.get('/person/vaccinated', authenticateJwt, personController.getVaccinated)
router.get('/person/vaccinated/json', authenticateJwt, personController.getVaccinatedJSON)
router.get('/person/:id/vaccinated', authenticateJwt, personController.getVaccinatedId)
router.post('/person', authenticateJwt, adminOnly, personController.postPerson)
router.put('/person/:id/:vaccine', authenticateJwt, adminOnly, personController.putId)
router.delete('/person/:vaccine', authenticateJwt, adminOnly, personController.deletePersonsWithVaccineName)


module.exports = router;