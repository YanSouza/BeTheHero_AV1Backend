const { Segments, Joi } = require('celebrate');

const incidentValidation = {
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}; 

module.exports = incidentValidation;
