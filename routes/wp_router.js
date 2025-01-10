import express from 'express';
import { getById_wpPost, getAll_wpPost, add_wpPost } from '../controllers/wp_controller.js';

const wpRouter = express.Router();

wpRouter.route('/post')
   .get(getAll_wpPost)
   .post(add_wpPost);

wpRouter.route('/post/:id')
   .get(getById_wpPost);


export default wpRouter;