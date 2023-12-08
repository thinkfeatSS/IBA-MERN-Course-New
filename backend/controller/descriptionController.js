const Description = require("../models/descriptionModel");
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
exports.createDescription = catchAsyncErrors(async (req, res) => {
    console.log(req.body);
    const data = await Description.create(req.body);
    // res.send("description created successfully");
    res.status(201).json({success: true,data});
});

exports.getDescription = catchAsyncErrors(async (req, res) => {
    const results = await Description.find();
    // res.send(results);
    res.status(200).json({success: true,results})
})
