const express = require('express');
const {createReview, getAllReviews, getSingleReview, deleteReview, updateReview} = require('../controller/reviewController')

const router = express.Router();
router.post('/createReview',createReview);
router.get('/getAllReviews',getAllReviews);
router.get('/getSingleReview/:reviewId',getSingleReview);
router.delete('/deleteReview/:reviewId',deleteReview)
router.put('/updateReview/:reviewId',updateReview);
module.exports = router