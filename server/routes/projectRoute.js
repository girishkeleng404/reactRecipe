const express = require('express');
const dishs = require('../controller/projectController');
 
 
const router = express.Router();

router.route('/dishs').post(dishs);


module.exports = router;
