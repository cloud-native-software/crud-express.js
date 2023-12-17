
const Student = require('../models/studentModel');

class StudentService {
  async getAllStudents() {
    try {
      const students = await Student.findAll();
      return students;
    } catch (error) {
      throw new Error('Unable to fetch students');
    }
  }
  async createStudent(studentDto) {
    try {
      // Create the student in the database
      const newStudent = await Student.create(studentDto);
      return newStudent;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new StudentService();