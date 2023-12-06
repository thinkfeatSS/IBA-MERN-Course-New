const express = require('express');
const mongoose = require('mongoose');
const DB_URI = 'mongodb+srv://isoomro:isoomro@cluster0.stkwc.mongodb.net/?retryWrites=true&w=majority'
const Description = require('./models/descriptionModel');
const {createDescription, getDescription} = require("./controller/descriptionController");
// server initialization
const app = express();
app.use(express.json());

app.post('/api/v1/createDescription',createDescription);
app.get('/api/v1/getDescription',getDescription);
// get - reciving data from server
// post - reciving data from server
// put - updating data from server
// delete - updating data from server
// use - call middileware

mongoose.connect(DB_URI).then(()=>{console.log('connected')}).catch((error)=>{console.log(error)});

// server start
app.listen(5000,()=>{console.log('server started');});