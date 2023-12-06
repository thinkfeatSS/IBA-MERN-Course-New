const express = require('express');
const mongoose = require('mongoose');
const DB_URI = 'mongodb+srv://isoomro:isoomro@cluster0.stkwc.mongodb.net/?retryWrites=true&w=majority'
const Description = require('./models/descriptionModel');
const {createDescription, getDescription} = require("./controller/descriptionController");
const {createProject, getAllProjects, getSingleProject, deleteProject} = require('./controller/projectController')
// server initialization
const app = express();
// use - call middileware
app.use(express.json());
// post - reciving data from server
// get - reciving data from server
// put - updating data from server
// delete - updating data from server

// Description Routers 
app.post('/api/v1/createDescription',createDescription);
app.get('/api/v1/getDescription',getDescription);

// Project Routers
app.post('/api/v1/createProject',createProject);
app.get('/api/v1/getAllProjects',getAllProjects);
app.get('/api/v1/getSingleProject/:projectId',getSingleProject);
app.delete('/api/v1/deleteProject/:projectId',deleteProject);

mongoose.connect(DB_URI).then(()=>{console.log('connected')}).catch((error)=>{console.log(error)});

// server start
app.listen(5000,()=>{console.log('server started');});