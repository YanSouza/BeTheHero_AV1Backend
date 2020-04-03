const { Segments, Joi } = require('celebrate');

const donateValidation = {
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}; 

module.exports = donateValidation;