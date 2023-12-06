const Project = require('../models/projectModel')
exports.createProject = async (req,res)=> {
    try {

        const createdProject = await Project.create(req.body);
        res.status(201).json({success: true,createdProject});
    }catch (err) {
        res.status(500).json({error: err});
    }
}

exports.getAllProjects = async (req, res)=> {
    try {
        const projects = await Project.find();
        res.status(200).json({success: true,projects});
    }catch (err) {
        res.status(500).json({error: err});
    }
}
// Find one
exports.getSingleProject = async (req, res)=> {
try{
    const {projectId} = req.params
    const project = await Project.findById(projectId);
    res.status(200).json({success: true, project});
}catch (err) {
    res.status(500).json({error: err});
}
}

// Update a project

// Delete a project
exports.deleteProject = async (req, res)=> {
    try{
        const {projectId} = req.params
        const deletedProject = await Project.deleteOne({_id:projectId})
        res.status(204).json({success:true, deletedProject});
    }catch (err) {
        res.status(500).json({error: err});
    }
}