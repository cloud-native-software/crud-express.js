const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Student = db.define('student', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id' // Specify the exact column name in the database
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name' // Specify the column name in the database
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: 'email' // Specify the column name in the database
  },
  grade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'grade' // Specify the column name in the database
  }
}, {
  schema: 'student', // Specify the schema name in PostgreSQL
  tableName: 'student', // Specify the exact table name in the database
  timestamps: false // If you don't have createdAt and updatedAt columns, set timestamps to false
});

module.exports = Student;