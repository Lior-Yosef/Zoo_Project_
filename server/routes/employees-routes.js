const EmployeeRoutes = require('express').Router();
const EmployeeController = require('../controllers/employee-controller');
const {GetAllEmployee,GetEmployeeByID,AddEmployee,UpdateEmployee,DeleteEmployee} = EmployeeController;

EmployeeController.get("/",GetAllEmployee);
EmployeeController.get("/:id",GetEmployeeByID);
EmployeeController.post("/",AddEmployee);
EmployeeController.put("/:id",UpdateEmployee);
EmployeeController.delete("/:id",DeleteEmployee);

module.exports = EmployeeController;