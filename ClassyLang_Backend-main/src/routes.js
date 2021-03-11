const express = require('express');
const LinguagensController = require('./controllers/LinguagensController');
const ParadigmasController = require('./controllers/ParadigmasController');
const LinguagensAddController = require('./controllers/LinguagensAddController');

const routes = express.Router();

routes.post('/linguagensAdd', LinguagensController.store);
routes.get('/linguagens', LinguagensController.index);
routes.get('/linguagens', LinguagensController.find);

routes.post('/linguagensAdd', LinguagensAddController.store);
routes.get('/linguagensAdd', LinguagensAddController.index);

routes.post('/paradigmas', LinguagensAddController.store);
routes.get('/paradigmas', ParadigmasController.index);

module.exports = routes;

