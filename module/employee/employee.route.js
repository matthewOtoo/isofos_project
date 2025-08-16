const express = require("express");
const employeeRouter = express.Router();

const employeeController = require("./employee.controller");
employeeRouter.get("/", employeeController.getAllEmployees);
employeeRouter.post("/", employeeController.registerEmployee);

module.exports = employeeRouter;
