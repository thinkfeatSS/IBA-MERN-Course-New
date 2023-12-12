const express = require('express');
const {createDescription, getDescription,updateDescription} = require("../controller/descriptionController");

const router = express.Router();

router.post('/createDescription',createDescription);
router.get('/getDescription',getDescription);
router.put('/updateDescription/:id',updateDescription);



module.exports = router