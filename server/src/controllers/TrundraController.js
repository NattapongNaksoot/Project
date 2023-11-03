const { Trundra } = require('../models')

module.exports = {
    
    async index(req, res) {
        try {
            const trundras = await Trundra.findAll()
            res.send(trundras)
        } catch (err) {
            res.status(500).send({
                error: 'the Trundra information was incorrect'
            })
        }
    },


    // create user
    async create(req, res) {
        try {
            const trundra = await Trundra.create(req.body)
            res.send(trundra.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Trundra incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Trundra.update(req.body, {
                where: {
                    id: req.params.trundraId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Trundra incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const trundra = await Trundra.findOne({
                where: {
                    id: req.params.trundraId
                }
            })
            if (!trundra) {
                return res.status(403).send({
                    error: 'The Trundra information was incorrect'
                })
            }
            await trundra.destroy()
            res.send(trundra)
        } catch (err) {
            res.status(500).send({
                error: 'The Trundra information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const trundra = await Trundra.findByPk(req.params.trundraId)
            res.send(trundra)
        } catch (err) {
            res.status(500).send({
                error: 'The Trundra information was incorrect'
            })
        }
    },
}