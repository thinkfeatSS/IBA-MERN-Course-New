const express = require('express');
const {createDescription, getDescription} = require("../controller/descriptionController");

const router = express.Router();

router.post('/createDescription',createDescription);
router.get('/getDescription',getDescription);



module.exports = router