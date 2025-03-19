const Lesson = require('../models/LessonSchema');
const { successResponse, errorResponse } = require('../utils/responseUtils');

exports.getAllLessons = async (req, res) => {
    try {
        const lessons = await Lesson.find().populate('instructor', 'name email');
        return res.json(lessons);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.createLesson = async (req, res) => {
    try {
        const { title, description, category, videoURL, difficulty, instructor } = req.body;
        const lesson = new Lesson({ title, description, category, videoURL, difficulty, instructor });
        await lesson.save();
        console.log(lesson);
        return res.status(201).json({ message: 'lesson created successfully' });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: err.message });
    }
};

exports.getLessonById = async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id).populate('instructor', 'name email');
        if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
        res.json(lesson);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.AllLessons = async (req, res) => {
    try {
        const lessons = await Lesson.find();
        successResponse(res, 'Lessons retrieved successfully', lessons);
    } catch (error) {
        errorResponse(res, 'Error retrieving lessons');
    }
};
