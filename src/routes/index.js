const express = require('express')
const routes = express.Router()
const pilotRoutes = require('./v1/pilot.routes')

routes.use('/api', [pilotRoutes])


module.exports = routes