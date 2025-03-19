const Quiz = require('../models/QuizSchema');

exports.getQuizzesByLesson = async (req, res) => {
    try {
        const quizzes = await Quiz.find({ lesson: req.params.lessonId });
        return res.json(quizzes);
    } catch (err) {
        return res.status(500).json({ error: error.message });
    }
};

exports.createQuiz = async (req, res) => {
    try {
        const { lesson, question, options, correctAnswer } = req.body;
        const quiz = new Quiz({ lesson, question, options, correctAnswer });
        await quiz.save();
        return res.status(201).json(quiz);
    } catch (err) {
        return res.status(500).json({ error: error.message });
    }
};
