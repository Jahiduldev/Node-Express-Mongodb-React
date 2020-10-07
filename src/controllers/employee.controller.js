'use strict';

const EmployeeModel = require('../models/employee.model');

exports.getEmployeeList = (req,res) => {
    // console.log('here all employee list');
    EmployeeModel.getAllEmpoyee( (err,employee) => {

        console.log("we are here");
        if(err)
        res.send(err);
        console.log('Employee',employee);
        res.send(employee);

    })

}

