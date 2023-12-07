const express = require('express');
const {createProject, getAllProjects, getSingleProject, deleteProject, updateProject} = require('../controller/projectController')

const router = express.Router();
router.post('/api/v1/createProject',createProject);
router.get('/api/v1/getAllProjects',getAllProjects);
router.get('/api/v1/getSingleProject/:projectId',getSingleProject);
router.delete('/api/v1/deleteProject/:projectId',deleteProject)
router.put('/api/v1/updateProject/:projectId',updateProject);

module.exports = router