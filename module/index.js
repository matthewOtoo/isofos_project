const express = require("express");
const router = express.Router();

const adminRouter = require("./admin/admin.route");
// const employeeRouter = require("./employee/employee.route");
// const clientRouter = require("./clients/client.route");
// const employeeProjectRouter = require("./employee_project/employee_project.route");
// const materialsRouter = require("./materials/material.route");
// const projectRouter = require("./project/project.route");
// const supplierRouter = require("./supplier/supplier.route");

router.use("/admin", adminRouter);
// router.use("/employee", employeeRouter);
// router.use("/client", clientRouter);
// router.use("/employeeProject", employeeProjectRouter);
// router.use("/materials", materialsRouter);
// router.use("/project", projectRouter);
// router.use("/supplier", supplierRouter);

module.exports = router;
