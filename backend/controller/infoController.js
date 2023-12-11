const { response } = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Info = require("../models/infoModel"); 

exports.getInfo = catchAsyncErrors(async (req, res) => {
    const info = await Info.find();
    res.status(200).json({success:true,info})
});

exports.createInfo = catchAsyncErrors(async(req, res) => {
    const createdInfo = await Info.create(req.body);
    res.status(201).json({success:true,createdInfo});
});

exports.deleteInfo = catchAsyncErrors(async (req, res) => {
    const { infoId } = req.params;
    const deletedInfo = await Info.deleteOne({ _id: infoId });
    res.status(204).json({ success: true, deletedInfo });
});