const express = require('express');
const mongoose = require('mongoose');
const DB_URI = 'mongodb+srv://isoomro:isoomro@cluster0.stkwc.mongodb.net/?retryWrites=true&w=majority'

const app = express();

mongoose.connect(DB_URI).then(()=>{console.log('connected')}).catch((error)=>{console.log(error)});

app.listen(5000,()=>{console.log('server started');});