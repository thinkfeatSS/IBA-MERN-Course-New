const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const DB_URI = 'mongodb+srv://isoomro:isoomro@cluster0.stkwc.mongodb.net/?retryWrites=true&w=majority'
const Description = require('./models/descriptionModel');
// server initialization
const app = express();
// use - call middileware
app.use(express.json());
app.use(cors());
// post - reciving data from server
// get - reciving data from server
// put - updating data from server
// delete - updating data from server

// Description Routers 
const description = require('./routes/descriptionRoute')
const review = require('./routes/reviewRoute')
const project = require('./routes/projectRoute')
const info = require('./routes/inforoutes')
// Project Routers
app.use('/api/v1',description);
app.use('/api/v1',project);
app.use('/api/v1',review);
app.use('/api/v1',info);


// Review Routers


mongoose.connect(DB_URI).then(()=>{console.log('connected')}).catch((error)=>{console.log(error)});

// server start
app.listen(5000,()=>{console.log('server started');});