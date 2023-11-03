const { Xiaomi } = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        try {
            const xiaomis = await Xiaomi.findAll()
            res.send(xiaomis)
        } catch (err) {
            res.status(500).send({
                error: 'the Xiaomi information was incorrect'
            })
        }
    },


    // create user
    async create(req, res) {
        try {
            const xiaomi = await Xiaomi.create(req.body)
            res.send(xiaomi.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Xiaomi incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Xiaomi.update(req.body, {
                where: {
                    id: req.params.xiaomiId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Xiaomi incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const xiaomi = await Xiaomi.findOne({
                where: {
                    id: req.params.xiaomiId
                }
            })
            if (!xiaomi) {
                return res.status(403).send({
                    error: 'The Xiaomi information was incorrect'
                })
            }
            await xiaomi.destroy()
            res.send(xiaomi)
        } catch (err) {
            res.status(500).send({
                error: 'The Xiaomi information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const xiaomi = await Xiaomi.findByPk(req.params.xiaomiId)
            res.send(xiaomi)
        } catch (err) {
            res.status(500).send({
                error: 'The Xiaomi information was incorrect'
            })
        }
    },
}