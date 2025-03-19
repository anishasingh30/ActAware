const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
    question: { type: String, required: true },
    options: [{ type: String }], // Multiple-choice options
    correctAnswer: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quiz', QuizSchema);
