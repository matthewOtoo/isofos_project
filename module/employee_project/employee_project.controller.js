const express = require("express");
const employeeProjectService = require("./employeeProject.service");

const getEmployeeProjects = async (req, res) => {
  try {
    const employeeProjects =
      await employeeProjectService.getAllEmployeeProjects();
    res.status(200).json({ employeeProjects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProjectsByEmployee = async (req, res) => {
  try {
    const { em_id } = req.params;
    const projects = await employeeProjectService.getProjectsByEmployee(em_id);
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployeesByProject = async (req, res) => {
  try {
    const { pro_id } = req.params;
    const employees = await employeeProjectService.getEmployeesByProject(
      pro_id
    );
    res.status(200).json({ employees });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getEmployeeProjects,
  getProjectsByEmployee,
  getEmployeesByProject,
};
