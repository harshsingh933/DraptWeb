const express = require('express');
const { convertSpeechToText } = require('../controllers/speechController');

const router = express.Router();

router.post('/convert', convertSpeechToText);

module.exports = router;
