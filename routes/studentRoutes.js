import * as studentController from '../Controller/studentController.js';
import express from 'express';

const studentRoutes = express.Router();

studentRoutes.get('/all', studentController.fetchAllStudents);
studentRoutes.post('/', studentController.createStudent);
studentRoutes.put('/:id', studentController.editStudent);
studentRoutes.delete('/:id', studentController.deleteStudent);

export default studentRoutes;