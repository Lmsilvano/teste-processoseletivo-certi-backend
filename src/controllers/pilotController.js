const { getData, createOrUpdateData } = require('../utils/functions')
const fileSystem = require('fs');
const axios = require('axios')
const pilot_startshipServices = require('../services/pilot_startship.services')
module.exports = {
    // Pegar os dados de todos os pilotos da api do SWAPI
    async getSwapiData(req, res) {
        try {
            let jsonSwapi = []
            let i = 1
            while (i) {
                console.log(`passou ${i}`)
                let response = await axios.get(`https://swapi.dev/api/people/?page=${i}`)
                if (response.data.next) {
                    jsonSwapi.push(...response.data.results)
                    i++
                } else {
                    jsonSwapi.push(...response.data.results)
                    i = 0
                }

            }

            await createOrUpdateData('pilotsSemImg.json', jsonSwapi)

            return res.status(200).send({ response: 'certo' })
        } catch (error) {
            return res.status(400).json({ error: `meu erro ${error.message}` })
        }
    },
    // Pega os dados do JSON, extraido da database da API do SWAPI, e mescla 
    // com os dados da retirados do json encontrado no github(vide créditos no readme)
    async generateDb(req, res) {
        try {
            let getPilotsGitHubjson = getData('pilotsGitHub.json')
            let getPilotsjson = getData('pilotsSemImg.json')
            getPilotsjson.map((allitem) => {
                getPilotsGitHubjson.map((pilotitem) => {
                    if (pilotitem.name === allitem.name) {
                        pilotitem.born = allitem.birth_year
                        pilotitem.starships = allitem.starships
                    }
                })
            })

            await createOrUpdateData('pilotsComImg.json', getPilotsGitHubjson)

            return res.status(200).send({ response: 'certo' })
        } catch (error) {
            return res.status(400).json({ error: `meu erro ${error.message}` })
        }
    },
    // Adiciona nome das espaço naves ao json
    async starshipWithPilotsDbGenerate(req, res) {
        try {
            let getPilotsjsonComImg = getData('pilotsComImg.json')
            let jsonSwapiStarships = []
            let i = 1
            while (i) {
                console.log(`passou ${i}`)
                let response = await axios.get(`https://swapi.dev/api/starships/?page=${i}`)
                if (response.data.next) {
                    jsonSwapiStarships.push(...response.data.results)
                    i++
                } else {
                    jsonSwapiStarships.push(...response.data.results)
                    i = 0
                }
            }
            await pilot_startshipServices.generateDbWithStarshipsNames(getPilotsjsonComImg, jsonSwapiStarships)
            return res.status(200).send({ response: 'certo' })
        } catch (error) {
            return res.status(400).json({ error: `meu erro ${error.message}` })
        }
    }


}