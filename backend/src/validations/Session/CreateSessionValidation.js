const { Segments, Joi } = require('celebrate');

const createSessionValidation = {
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}; 

module.exports = createSessionValidation;