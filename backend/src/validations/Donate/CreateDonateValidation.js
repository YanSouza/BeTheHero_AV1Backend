const { Segments, Joi } = require('celebrate');

const createDonateValidation = {
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        petname: Joi.string().required(),
        species: Joi.string().required(),
        sex: Joi.string().required(),
        port: Joi.string().required(),
        description: Joi.string().required(),        
    })
}; 

module.exports = createDonateValidation;