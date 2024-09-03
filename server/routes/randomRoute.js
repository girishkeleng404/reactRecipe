 
const express = require('express');
 const random = require('../controller/random');
 
 
const router = express.Router();
 

router.route('/random').get(random);


module.exports = router;