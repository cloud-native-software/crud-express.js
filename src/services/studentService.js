
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
}

module.exports = new StudentService();