//validations
// validate middleware

const express = require('express')
const router = express.Router()

const { create, index, login } = require('../controllers/Users')
const validate = require('../middlewares/validate')   //validate middleware
const schemas = require('../validations/Users') //validations



router.get('/', index)
router.route('/').post(validate(schemas.createValidation), create)
router.route('/login').post(validate(schemas.loginValidation), login)


module.exports = router
