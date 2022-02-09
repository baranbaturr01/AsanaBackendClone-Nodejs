const CryptoJS = require('crypto-js')
const JWT = require('jsonwebtoken')

const passwordToHash = (password) => {

    return CryptoJS.HmacSHA256(password, process.env.PASSWORD_HASH_KEY).toString()

}

const generateAccessToken = (user) => {

    return JWT.sign({ user: user }, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: "1w" })

}

const generateRefreshToken = (user) => {

    return JWT.sign({ user: user }, process.env.REFRESH_TOKEN_SECRET_KEY)

}



module.exports = {
    passwordToHash,
    generateAccessToken,
    generateRefreshToken
}