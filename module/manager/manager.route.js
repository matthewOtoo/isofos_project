const express = require("express");
const managerRouter = express.Router();
const managerController = require("./manager.controller");

managerRouter.get("/", managerController.getManagers);
managerRouter.post("/", managerController.registerManager);
managerRouter.get("/:id", managerController.getManagerById);

module.exports = managerRouter;