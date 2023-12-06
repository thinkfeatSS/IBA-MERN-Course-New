const Description = require("../models/descriptionModel");

exports.createDescription = async (req, res) => {
  try {
    console.log(req.body);
    const data = await Description.create(req.body);
    // res.send("description created successfully");
    res.status(201).json({success: true,data});
  } catch (err) {
    console.log(err);
  }
};

exports.getDescription = async (req, res) => {
  try {
    const results = await Description.find();
    // res.send(results);
    res.status(201).json({success: true,results})
  } catch (err) {
    console.log(err);
  }
}
