const { insert, list } = require('../services/Projects')
const httpStatus = require('http-status')

const index = (req, res) => {


    list().then(response => {
        res.status(httpStatus.OK).send(response)
    }).catch(error => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
    })
}

const create = (req, res) => {

    req.body.user_id = req.user._id

    insert(req.body).then(response => {

        res.status(httpStatus.CREATED).send(response)

    }).catch(error => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)

    })
}

const update = (req, res) => {

    if (!req.params.id) {
        res.status(httpStatus.BAD_REQUEST).send({ error: 'Hata' })
    }

}

module.exports = {
    index,
    create,
    update
}