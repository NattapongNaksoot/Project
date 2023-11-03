const { Aquatic } = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        try {
            const aquatics = await Aquatic.findAll()
            res.send(aquatics)
        } catch (err) {
            res.status(500).send({
                error: 'the Aquatic information was incorrect'
            })
        }
    },

    // create user
    async create(req, res) {
        try {
            const aquatic = await Aquatic.create(req.body)
            res.send(aquatic.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Aquatic incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Aquatic.update(req.body, {
                where: {
                    id: req.params.aquaticId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Aquatic incorrect'
            })
        }
    },

    // delete electrolux
    async delete(req, res) {
        try {
            const aquatic = await Aquatic.findOne({
                where: {
                    id: req.params.aquaticId
                }
            })
            if (!aquatic) {
                return res.status(403).send({
                    error: 'The Aquatic information was incorrect'
                })
            }
            await aquatic.destroy()
            res.send(aquatic)
        } catch (err) {
            res.status(500).send({
                error: 'The Aquatic information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const aquatic = await Aquatic.findByPk(req.params.aquaticId)
            res.send(aquatic)
        } catch (err) {
            res.status(500).send({
                error: 'The Equatic information was incorrect'
            })
        }
    },
}