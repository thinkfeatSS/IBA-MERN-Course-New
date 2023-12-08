const Project = require("../models/projectModel");
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

exports.createProject = catchAsyncErrors(async (req, res) => {

    const createdProject = await Project.create(req.body);
    res.status(201).json({ success: true, createdProject });
});

exports.getAllProjects = catchAsyncErrors(async (req, res) => {
    const projects = await Project.find();
    res.status(200).json({ success: true, projects });
});
// Find one
exports.getSingleProject = catchAsyncErrors(async (req, res) => {
    const { projectId } = req.params;
    const project = await Project.findById(projectId);
    res.status(200).json({ success: true, project });
});

// Update a project
exports.updateProject = catchAsyncErrors(async (req, res) => {
  const { projectTitle, projectDescription, projectPrice } = req.body;
  const { projectId } = req.params;
    const project = Project.findById(projectId);
    if (!project) {
      console.log("Project not found");
      res.status(404).json({ success: false, message: "Project not found" });
    }
    
    await Project.findByIdAndUpdate(projectId,req.body);
    res.status(201).json({ success: true });
});

// Delete a project
exports.deleteProject = catchAsyncErrors(async (req, res) => {
    const { projectId } = req.params;
    const deletedProject = await Project.deleteOne({ _id: projectId });
    res.status(204).json({ success: true, deletedProject });
});
