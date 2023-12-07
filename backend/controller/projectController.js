const Project = require("../models/projectModel");
exports.createProject = async (req, res) => {
  try {
    const createdProject = await Project.create(req.body);
    res.status(201).json({ success: true, createdProject });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ success: true, projects });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
// Find one
exports.getSingleProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findById(projectId);
    res.status(200).json({ success: true, project });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Update a project
exports.updateProject = async (req, res) => {
  const { projectTitle, projectDescription, projectPrice } = req.body;
  const { projectId } = req.params;
  try {
    const project = Project.findById(projectId);
    if (!project) {
      console.log("Project not found");
      res.status(404).json({ success: false, message: "Project not found" });
    }
    
    await Project.findByIdAndUpdate(projectId,req.body);
    // // Update Project
    // project.projectTitle = projectTitle;
    // project.projectDescription = projectDescription;
    // // project.projectPrice = projectPrice;

    // await project.save();
    res.status(201).json({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: e });
  }
};

// Delete a project
exports.deleteProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const deletedProject = await Project.deleteOne({ _id: projectId });
    res.status(204).json({ success: true, deletedProject });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
