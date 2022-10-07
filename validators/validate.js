const joi = require("joi");

function validateUser(user) {
  const Schema = joi.object().keys({
    firstname: joi.string().required(),
    lastname: joi.string().required(),
    dob: joi.date(),
    phone: joi.number(),
    email: joi.string().number(),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9}{3,30}$")).min(8),
  });

  return Schema.validate(user);
}
