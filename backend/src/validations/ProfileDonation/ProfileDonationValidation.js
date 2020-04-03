const { Segments, Joi } = require('celebrate');

const profileDonationValidation = {
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}; 

module.exports = profileDonationValidation;