const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    text : {
        type : String,
        required : true,
    },
    count : {
        type : String,
        required : true,
    },
});

module.exports = mongoose.model("Info", infoSchema)