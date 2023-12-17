// src/controllers/studentController.js

const express = require('express');
const router = express.Router();
const studentService = require('../services/studentService');

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     responses:
 *       200:
 *         description: Returns all students
 */
router.get('/students', async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

