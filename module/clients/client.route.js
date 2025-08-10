const express = require("express");
const clientRouter = express.Router();
const client = require("./client.controller");

clientRouter.get("/", client.getAllClients);
clientRouter.post("/", client.registerClient);
clientRouter.get("/:id", client.getClientById); // Assuming you'll add this method in controller

module.exports = clientRouter;
