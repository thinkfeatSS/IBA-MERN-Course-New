const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  clientReview: { type: String, required: true },
  ratings: {
    type: Number,
    required: true,
    min: [1, "Value cant less than One"],
    max: [5, "Value cant greater than five"],
  },
});

module.exports = mongoose.model("Review", reviewSchema);
