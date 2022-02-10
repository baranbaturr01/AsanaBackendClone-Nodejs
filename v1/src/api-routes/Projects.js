//validations
// validate middleware

const express = require('express')
const { index ,create,update} = require('../controllers/Projects')
const authenticate = require('../middlewares/authenticate')
const validate = require('../middlewares/validate')
const schemas = require('../validations/Projects')
const router = express.Router()


router.route('/').get(authenticate, index)
router.route('/').post(validate(authenticate, schemas.createValidation), create) 
router.route('/:id').patch(authenticate, validate(schemas.updaeValidation), update)



module.exports = router
