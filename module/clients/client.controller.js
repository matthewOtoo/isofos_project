const clientService = require("./client.service");

const getClients = async (req, res) => {
  try {
    const clients = await clientService.getAllClients();
    res.status(200).json({ clients });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createClient = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required." });
    }
    const data = { name, email, phone, address };
    const result = await clientService.createClient(data);
    res.status(201).json({ message: "Client created successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Client ID is required." });
    }
    const client = await clientService.getClientById(id);
    if (!client) {
      return res.status(404).json({ error: "Client not found." });
    }
    res.status(200).json({ client });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id) {
      return res.status(400).json({ error: "Client ID is required." });
    }
    const result = await clientService.updateClient(id, data);
    res.status(200).json({ message: "Client updated successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Client ID is required." });
    }
    const result = await clientService.deleteClient(id);
    res.status(200).json({ message: "Client deleted successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getClients,
  createClient,
  getClientById,
  updateClient,
  deleteClient
};