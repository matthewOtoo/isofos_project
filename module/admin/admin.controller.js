const express = require("express");
const adminService = require("./admin.service");

const getAdmins = async (req, res) => {
  try {
    const admins = await adminService.getAllManagers();
    res.status(200).json({ admins });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const registerAdmin = async (req, res) => {
  try {
    const { mng_id, mng_name, mng_email, mng_phoneNumbe } = req.body;
    if (!mng_id || !mng_name || !mng_email || !mng_phoneNumbe) {
      return res.status(400).json({ error: "All fields are required." });
    }
    const data = { mng_id, mng_name, mng_email, mng_phoneNumbe };
    const result = await adminService.registerAdmin(data);
    res.status(201).json({ message: "Admin registered successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getManagerById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Manager ID is required." });
    }
    const manager = await adminService.getManagerById(id);
    if (!manager) {
      return res.status(404).json({ error: "Manager not found." });
    }
    res.status(200).json({ manager });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAdmins,
  registerAdmin,
};
