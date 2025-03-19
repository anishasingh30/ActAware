const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
    completed: { type: Boolean, default: false },
    score: { type: Number, default: 0 },
    attempts: { type: Number, default: 0 },
    lastAttemptDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Progress', ProgressSchema);
