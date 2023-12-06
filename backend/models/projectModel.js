const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectTitle : {
        type: String,
        required: [true, "Project Title is required"]
    },
    projectDescription : {
        type: String,
        required: [true, "Project Description is required"]
    },
    projectPrice : Number,

    projectImages : [String],
});

module.exports = mongoose.model("Project", projectSchema)