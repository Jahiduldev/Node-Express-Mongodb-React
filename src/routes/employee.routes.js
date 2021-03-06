const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee.controller');

// Retrieve all employees
router.get('/', employeeController.getEmployeeList);

module.exports = router;
