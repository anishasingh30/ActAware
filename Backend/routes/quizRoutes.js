const express = require('express');
const { getQuizzesByLesson, createQuiz } = require('../controllers/quizController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/:lessonId', getQuizzesByLesson);
router.post('/', authMiddleware, createQuiz);

module.exports = router;
