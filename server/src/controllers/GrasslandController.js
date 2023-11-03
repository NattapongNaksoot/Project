const { Grassland } = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        try {
            const grasslands = await Grassland.findAll()
            res.send(grasslands)
        } catch (err) {
            res.status(500).send({
                error: 'the Aquatic information was incorrect'
            })
        }
    },

    // create user
    async create(req, res) {
        try {
            const grassland = await Grassland.create(req.body)
            res.send(grassland.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Aquatic incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Grassland.update(req.body, {
                where: {
                    id: req.params.GrasslandId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Grassland incorrect'
            })
        }
    },

    // delete electrolux
    async delete(req, res) {
        try {
            const grassland = await Grassland.findOne({
                where: {
                    id: req.params.grasslandId
                }
            })
            if (!grassland) {
                return res.status(403).send({
                    error: 'The Grassland information was incorrect'
                })
            }
            await grassland.destroy()
            res.send(grassland)
        } catch (err) {
            res.status(500).send({
                error: 'The Aquatic information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const grassland = await Grassland.findByPk(req.params.grasslandId)
            res.send(grassland)
        } catch (err) {
            res.status(500).send({
                error: 'The Grassland information was incorrect'
            })
        }
    },
}