const express = require("express");
const adminRouter = express.Router();
const admin = require("./admin.controller");

adminRouter.get("/", admin.getAdmins);
adminRouter.post("/", admin.registerAdmin); // Add this line

module.exports = adminRouter;
