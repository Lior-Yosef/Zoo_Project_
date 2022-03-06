const EmployeeRoutes = require('express').Router();
const EmployeeController = require('../controllers/employee-controller');
const {GetAllEmployee,GetEmployeeByID,AddEmployee,UpdateEmployee,DeleteEmployee} = EmployeeController;

EmployeeRoutes.get("/",GetAllEmployee);
EmployeeRoutes.get("/:id",GetEmployeeByID);
EmployeeRoutes.post("/",AddEmployee);
EmployeeRoutes.put("/:id",UpdateEmployee);
EmployeeRoutes.delete("/:id",DeleteEmployee);

module.exports = EmployeeRoutes;