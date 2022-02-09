const { insert, list, loginUser } = require('../services/Users')
const httpStatus = require('http-status')
const logger = require('../scripts/logger/Projects')


const { passwordToHash, generateAccessToken, generateRefreshToken } = require('../scripts/utils/helper')


//add user or register user
const create = (req, res) => {

    req.body.password = passwordToHash(req.body.password)


    insert(req.body).then(response => {

        res.status(httpStatus.CREATED).send(response)

    }).catch(error => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)

    })
}

//login users
const login = (req, res, next) => {

    req.body.password = passwordToHash(req.body.password)

    loginUser(req.body).then(user => {


        if (!user) {

            return res.status(httpStatus.NOT_FOUND).send({ message: 'Kullanıcı Bulunamadı' })

        }
        const accessToken = generateAccessToken(user)
        const refreshToken = generateRefreshToken(user)

        return res.status(httpStatus.OK).send({ access_token: accessToken, refresh_token: refreshToken })

    }).catch((error => {

        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
        logger.log({
            level: 'error',
            message: error,
        })
    }))

}


//list users
const index = (req, res) => {

    list().then(response => {
        res.status(httpStatus.OK).send(response)
    }).catch(error => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
    })
}

module.exports = {
    create,
    index,
    login
}