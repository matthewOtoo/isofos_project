const express = require("express");
const managerRouter = express.Router();
const managerController = require("./manager.controller");

managerRouter.get("/", managerController.getManagers);
managerRouter.post("/signup", managerController.registerManager);
managerRouter.post("/login", managerController.loginManager);
managerRouter.get("/:id", managerController.getManagerById);

module.exports = managerRouter;