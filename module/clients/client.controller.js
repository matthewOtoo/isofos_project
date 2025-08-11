// const express = require("express");
// const clientService = require("./client.service");

// const getAllClients = async (req, res) => {
//   try {
//     const clients = await clientService.getAllClients();
//     res.status(200).json({ clients });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const registerClient = async (req, res) => {
//   try {
//     const { cl_id, cl_name, cl_email, cl_phoneNumber, cl_projectType, mng_id } =
//       req.body;

//     if (!cl_id || !cl_name || !cl_email || !cl_phoneNumber || !cl_projectType) {
//       return res
//         .status(400)
//         .json({ error: "All fields except manager ID are required." });
//     }

//     // Validate manager ID if provided
//     if (mng_id) {
//       const manager = await clientService.getManagerById(mng_id);
//       if (!manager) {
//         return res.status(404).json({ error: "Manager not found." });
//       }
//     }

//     const data = {
//       cl_id,
//       cl_name,
//       cl_email,
//       cl_phoneNumber,
//       cl_projectType,
//       mng_id,
//     };
//     const result = await clientService.registerClient(data);

//     res.status(201).json({ message: "Client registered successfully", result });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   getAllClients,
//   registerClient,
// };
