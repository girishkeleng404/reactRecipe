import express, { Router } from 'express';
import random from '../controller/random';
const router = express.Router();
 

router.route('/random').get(random);


export default router;