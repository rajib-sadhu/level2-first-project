import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // creating a schema validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // creating a schema validation using zod
    const zodParseData = studentValidationSchema.parse(studentData);

    // if (error) {
    //   return res.status(500).json({
    //     success: false,
    //     message: 'Something is wrong',
    //     error: error.details,
    //   });
    // }

    const result = await StudentServices.createStudentIntoDB(zodParseData);

    return res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      success: false,
      message: 'somethings is wrong',
      error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    return res.status(200).json({
      success: true,
      message: 'Students is retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      success: false,
      message: 'somethings is wrong',
      error,
    });
  }
};

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    return res.status(200).json({
      success: true,
      message: 'A Student is retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      success: false,
      message: 'somethings is wrong',
      error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
