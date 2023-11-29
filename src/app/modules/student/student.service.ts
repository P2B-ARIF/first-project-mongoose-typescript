import { StudentModal } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModal.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModal.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModal.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
