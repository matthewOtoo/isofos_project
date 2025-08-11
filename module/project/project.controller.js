// const express = require("express");
// const projectService = require("./project.service");

// const getAllProjects = async (req, res) => {
//   try {
//     const projects = await projectService.getAllProjects();
//     res.status(200).json({ projects });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const registerProject = async (req, res) => {
//   try {
//     const { pro_id, pro_name, pro_start_date, pro_end_date, mat_id } = req.body;

//     if (!pro_id || !pro_name || !pro_start_date || !pro_end_date) {
//       return res
//         .status(400)
//         .json({ error: "All fields except material ID are required." });
//     }

//     // Validate material ID if provided
//     if (mat_id) {
//       const material = await projectService.getMaterialById(mat_id);
//       if (!material) {
//         return res.status(404).json({ error: "Material not found." });
//       }
//     }

//     const data = { pro_id, pro_name, pro_start_date, pro_end_date, mat_id };
//     const result = await projectService.registerProject(data);

//     res
//       .status(201)
//       .json({ message: "Project registered successfully", result });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Additional controller for assigning employees to projects
// const assignEmployeeToProject = async (req, res) => {
//   try {
//     const { em_id, pro_id } = req.body;

//     if (!em_id || !pro_id) {
//       return res
//         .status(400)
//         .json({ error: "Both employee ID and project ID are required." });
//     }

//     // Validate employee exists
//     const employee = await projectService.getEmployeeById(em_id);
//     if (!employee) {
//       return res.status(404).json({ error: "Employee not found." });
//     }

//     // Validate project exists
//     const project = await projectService.getProjectById(pro_id);
//     if (!project) {
//       return res.status(404).json({ error: "Project not found." });
//     }

//     const result = await projectService.assignEmployeeToProject(em_id, pro_id);

//     res
//       .status(201)
//       .json({ message: "Employee assigned to project successfully", result });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   getAllProjects,
//   registerProject,
//   assignEmployeeToProject,
// };
