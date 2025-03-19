const express = require('express');
const { getUserProgress, updateProgress } = require('../controllers/progressController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getUserProgress);
router.post('/', authMiddleware, updateProgress);

module.exports = router;
