const express = require('express');
const router = express.Router();
const {createInfo, getInfo, deleteInfo} = require('../controller/infoController')
router.post("/createInfo",createInfo);
router.get("/getInfo",getInfo);
router.delete("/deleteInfo/:infoId",deleteInfo);

module.exports = router
