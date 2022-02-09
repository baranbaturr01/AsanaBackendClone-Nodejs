const Joi = require('joi')

const createValidation = Joi.object({
    full_name: Joi.string().required(),
    password: Joi.string().required().min(8),
    email: Joi.string().email().required().min(8),
})

const loginValidation = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required().min(8),
})

module.exports = {
    createValidation,
    loginValidation
}