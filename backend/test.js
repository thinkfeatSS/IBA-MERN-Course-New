// importing mogoose library for database manipulation
// importing express library for server side request handeling 
const express = require('express');

// creating a server object
const app = express();
app.get('/',(req,res)=>{
    res.send("Wellome to home page")
})
// get request
app.get('/getRequest',(req, res)=>{
    res.send('Hello World');
})
// Routes ---- /getSingleProject
const project = {
    "title": "Ecommerce",
    "description": "kjasdjkf;lasjd;l",
    "price" : "5$"
}
app.get('/getSingleProject',(req,res)=>{
    res.send(project)
}
// {
    // "title": "Ecommerce",
    // "description": "kjasdjkf;lasjd;l",
    // "price" : "5$"
// }

// Start server
app.listen(5000,()=>{console.log('server listing at port 5000')});