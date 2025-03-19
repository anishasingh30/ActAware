const Progress = require('../models/ProgressSchema');

exports.getUserProgress = async (req, res) => {
    try {
        const progress = await Progress.find({ user: req.userId }).populate('lesson', 'title category');
        return res.json(progress);
    } catch (err) {
        return res.status(500).json({ error: error.message });
    }
};

exports.updateProgress = async (req, res) => {
    try {
        const { lesson, completed, score } = req.body;
        let progress = await Progress.findOne({ user: req.userId, lesson });

        if (!progress) {
            progress = new Progress({ user: req.userId, lesson, completed, score });
        } else {
            progress.completed = completed;
            progress.score = score;
        }

        await progress.save();
        return res.json(progress);
    } catch (err) {
        return res.status(500).json({ error: error.message });
    }
};
