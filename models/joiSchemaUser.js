const Joi = require('@hapi/joi');

module.exports.createUserSchema = Joi.object({
// mail: Joi.string().email().required(),
name: Joi.string().alphanum().min(3).max(30).required(),
// phone: Joi.number().integer().min(100000000).max(999999999).required(),
// password: Joi.string().required()
});

module.exports.createUserSchema = Joi.object({
    mail: Joi.string().email().required(),
    name: Joi.string().alphanum().min(3).max(30).required(),
    phone: Joi.number().integer().min(100000000).max(999999999).required(),
    password: Joi.string().required()
    });