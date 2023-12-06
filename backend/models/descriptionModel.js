const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
    descriptionField : String
});

module.exports = mongoose.model("Description", descriptionSchema)