const { Tropical } = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        try {
            const tropicals = await Tropical.findAll()
            res.send(tropicals)
        } catch (err) {
            res.status(500).send({
                error: 'the Tropical information was incorrect'
            })
        }
    },


    // create user
    async create(req, res) {
        try {
            const tropical = await Tropical.create(req.body)
            res.send(tropical.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Tropical incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Tropical.update(req.body, {
                where: {
                    id: req.params.tropicalId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Tropical incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const tropical = await Tropical.findOne({
                where: {
                    id: req.params.tropicalId
                }
            })
            if (!tropical) {
                return res.status(403).send({
                    error: 'The Tefal information was incorrect'
                })
            }
            await tropical.destroy()
            res.send(tropical)
        } catch (err) {
            res.status(500).send({
                error: 'The Tefal information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const tropical = await Tropical.findByPk(req.params.tropicalId)
            res.send(tropical)
        } catch (err) {
            res.status(500).send({
                error: 'The Tefal information was incorrect'
            })
        }
    },
}