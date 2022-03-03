const express = require('express')
const pilotRoutes = express.Router()
const pilotController = require('../../controllers/pilotController')


pilotRoutes.post('/v1/getswapidata', pilotController.getSwapiData)
pilotRoutes.post('/v1/generatedb', pilotController.generateDb)
pilotRoutes.post('/v1/generatefinaldb', pilotController.starshipWithPilotsDbGenerate)
module.exports = pilotRoutes