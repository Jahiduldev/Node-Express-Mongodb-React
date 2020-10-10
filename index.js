const express = require('express');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes');

// using as middleware
app.use('/api/v1/employees', employeeRoutes);

//define root route
app.get('/', (req, res) => {
  res.send("Hello Worldd");
});

//This is a project for kazi shamim dddddddd ddddddd main
// listen for requests
app.listen(port, () => {
  console.log(`Express Server is listening on port ${port}`);
});