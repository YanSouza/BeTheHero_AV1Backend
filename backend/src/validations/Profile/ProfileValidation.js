const { Segments, Joi } = require('celebrate');

const profileValidation = {
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}; 

module.exports = profileValidation;