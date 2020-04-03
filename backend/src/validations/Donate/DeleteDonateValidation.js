const { Segments, Joi } = require('celebrate');

const deleteDonateValidation = {
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }) 
}; 

module.exports = deleteDonateValidation;