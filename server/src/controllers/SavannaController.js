const { Savanna } = require('../models')

module.exports = {
    
    async index(req, res) {
        try {
            const savannas = await Savanna.findAll()
            res.send(savannas)
        } catch (err) {
            res.status(500).send({
                error: 'the Savanna information was incorrect'
            })
        }
    },


    // create user
    async create(req, res) {
        try {
            const savanna = await Savanna.create(req.body)
            res.send(savanna.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Savanna incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Savanna.update(req.body, {
                where: {
                    id: req.params.savannaId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Savanna incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const savanna = await Savanna.findOne({
                where: {
                    id: req.params.savannaId
                }
            })
            if (!savanna) {
                return res.status(403).send({
                    error: 'The Savanna information was incorrect'
                })
            }
            await savanna.destroy()
            res.send(savanna)
        } catch (err) {
            res.status(500).send({
                error: 'The Savanna information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const savanna = await Savanna.findByPk(req.params.savannaId)
            res.send(savanna)
        } catch (err) {
            res.status(500).send({
                error: 'The Tefal information was incorrect'
            })
        }
    },
}