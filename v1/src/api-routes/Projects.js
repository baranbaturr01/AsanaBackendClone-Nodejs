//validations
// validate middleware

const express = require('express')
const { create, index } = require('../controllers/Projects')
const authenticate = require('../middlewares/authenticate')
const validate = require('../middlewares/validate')
const schemas = require('../validations/Projects')
const router = express.Router()


router.route('/').get(authenticate, index)
router.route('/').post(validate(schemas.createValidation), authenticate, create)


module.exports = router
