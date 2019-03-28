//declare variables
const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

//modify the router
router.get('/test', controller.test);
router.post('/create', controller.create);

//module exports
module.exports = router;