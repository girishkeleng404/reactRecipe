const express = require('express');
const {dishs,details } = require('../controller/projectController');
 
 
 
const router = express.Router();

router.route('/dishs').post(dishs);
router.route('/details/:id').post(details);


module.exports = router;
