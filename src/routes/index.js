const router = require('express').Router();
const calculateVM = require('../controllers');

router.post('/calculate', calculateVM);

module.exports = router;
