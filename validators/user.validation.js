const Joi = require("joi")

function validateUser (user) {
    const Schema = Joi.object().keys({
           firstname: Joi.string().required(),
           lastname:  Joi.string().required(),
           dob: Joi.date(),
           phone: Joi.number(),
           email: Joi.string().email(),
           password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(8)

    })

    return Schema.validate(user)
  }

module.exports = {validateUser}