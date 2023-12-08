const Review = require("../models/reviewModel");
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

exports.createReview = catchAsyncErrors(async (req, res) => {

    const createdReview = await Review.create(req.body);
    res.status(201).json({ success: true, createdReview });
});

exports.getAllReviews = catchAsyncErrors(async (req, res) => {
    const reviews = await Review.find();
    res.status(200).json({ success: true, reviews });
});
// Find one
exports.getSingleReview = catchAsyncErrors(async (req, res) => {
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId);
    res.status(200).json({ success: true, review });
});

// Update a review
exports.updateReview = catchAsyncErrors(async (req, res) => {
  const { reviewId } = req.params;
    const review = Review.findById(reviewId);
    if (!review) {
      res.status(404).json({ success: false, message: "review not found" });
    }
    
    await Review.findByIdAndUpdate(reviewId,req.body);
    res.status(201).json({ success: true });
});

// Delete a review
exports.deleteReview = catchAsyncErrors(async (req, res) => {
    const { reviewId } = req.params;
    const deletedReview = await Review.deleteOne({ _id: reviewId });
    res.status(204).json({ success: true, deletedReview });
});
