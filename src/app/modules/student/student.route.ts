import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// Define routes
router.post('/create-student', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudents);
router.delete('/:studentId', StudentControllers.deleteStudent);

export const StudentRoutes = router;