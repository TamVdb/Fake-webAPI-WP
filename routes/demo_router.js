//! Rôle des routers
//? Réaliser le lien entre l'url cible et la méthode du controller

import express from 'express';
import { guessNumber, helloWorld, readPostMsg } from '../controllers/demo_controller.js';
// import * as demoController from './../controllers/demo_controller'; // Importer un objet qui contient plusieurs méthodes

const demoRouter = express.Router();


demoRouter.route('/hello')
   .get(helloWorld)
   // .get (demoController.helloWorld);
   .post(readPostMsg);

demoRouter.route('/guess/:nb')
   .get(guessNumber);
// .get (demoController.guessNumber);

export default demoRouter;