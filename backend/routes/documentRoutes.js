// routes/documentRoutes.js
const express = require('express');
const { saveDocument, getDocuments } = require('../controllers/documentController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { languageMiddleware } = require('../middlewares/languageMiddleware');

const router = express.Router();

// Apply the language middleware to relevant routes
router.post('/', authMiddleware, languageMiddleware, saveDocument);
router.get('/:userId', authMiddleware, languageMiddleware, getDocuments);

module.exports = router;
