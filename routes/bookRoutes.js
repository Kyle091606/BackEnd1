import * as bookController from '../Controller/bookController.js';
import express from 'express';

const bookRoutes = express.Router();

bookRoutes.get('/all', bookController.fetchAllBooks);

export default bookRoutes;