const { Aqatic } = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        try {
            const aqatic = await Aqatic.findAll()
            res.send(aqatic)
        } catch (err) {
            res.status(500).send({
                error: 'the Aqatic information was incorrect'
            })
        }
    },


    // create user
    async create(req, res) {
        try {
            const aqatic = await Aqatic.create(req.body)
            res.send(aqatic.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Aqatic incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Aqatic.update(req.body, {
                where: {
                    id: req.params.aqaticId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Aqatic incorrect'
            })
        }
    },

    // delete electrolux
    async delete(req, res) {
        try {
            const aqatic = await Aqatic.findOne({
                where: {
                    id: req.params.aqaticId
                }
            })
            if (!aqatic) {
                return res.status(403).send({
                    error: 'The Aqatic information was incorrect'
                })
            }
            await aqatic.destroy()
            res.send(electrolux)
        } catch (err) {
            res.status(500).send({
                error: 'The Aqatic information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const aqatic = await Aqatic.findByPk(req.params.aqaticId)
            res.send(aqatic)
        } catch (err) {
            res.status(500).send({
                error: 'The Aqatic information was incorrect'
            })
        }
    },
}