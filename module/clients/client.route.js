const express = require("express");
const clientRouter = express.Router();
const clientController = require("./client.controller");

clientRouter.get("/", clientController.getClients);
clientRouter.post("/", clientController.createClient);
clientRouter.get("/:id", clientController.getClientById);
clientRouter.put("/:id", clientController.updateClient);
clientRouter.delete("/:id", clientController.deleteClient);

module.exports = clientRouter;