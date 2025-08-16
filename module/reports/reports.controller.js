const reportService = require("./report.service");

const getProjectCostReport = async (req, res) => {
  try {
    const { projectId } = req.params;
    if (!projectId) {
      return res.status(400).json({ error: "Project ID is required." });
    }
    const report = await reportService.getProjectCostReport(projectId);
    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployeeWorkloadReport = async (req, res) => {
  try {
    const report = await reportService.getEmployeeWorkloadReport();
    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInventoryValueReport = async (req, res) => {
  try {
    const report = await reportService.getInventoryValueReport();
    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProjectCostReport,
  getEmployeeWorkloadReport,
  getInventoryValueReport
};