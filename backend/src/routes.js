const express = require('express');
const  { celebrate } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const DonateController = require('./controllers/DonateController');
const ProfileDonationController = require('./controllers/ProfileDonationController');

const createSessionValidation = require('./validations/Session/CreateSessionValidation');
const createOngValidation = require('./validations/Ong/CreateOngValidations');
const profileValidation = require('./validations/Profile/ProfileValidation');
const profileDonationValidation = require('./validations/ProfileDonation/ProfileDonationValidation');
const incidentValidation = require('./validations/Incident/IncidentValidation');
const createIncidentValidation = require('./validations/Incident/CreateIncidentValidation');
const deleteIncidentValidation = require('./validations/Incident/DeleteIncidentValidation');
const donateValidation = require('./validations/Donate/DonateValidation');
const createDonateValidation = require('./validations/Donate/CreateDonateValidation');
const deleteDonateValidation = require('./validations/Donate/DeleteDonateValidation');


const routes = express.Router();

routes.post('/sessions', celebrate(createSessionValidation) ,SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate(createOngValidation), OngController.create);
routes.delete('/ongs/:id', OngController.delete);

routes.get('/profile', celebrate(profileValidation), ProfileController.index);
routes.get('/profiledonate', celebrate(profileDonationValidation), ProfileDonationController.index);

routes.get('/incidents', celebrate(incidentValidation), IncidentController.index);
routes.post('/incidents', celebrate(createIncidentValidation), IncidentController.create);
routes.delete('/incidents/:id', celebrate(deleteIncidentValidation), IncidentController.delete);

routes.get('/donation', celebrate(donateValidation), DonateController.index);
routes.post('/donation', celebrate(createDonateValidation), DonateController.create);
routes.delete('/donation/:id',celebrate(deleteDonateValidation), DonateController.delete);


module.exports = routes;
