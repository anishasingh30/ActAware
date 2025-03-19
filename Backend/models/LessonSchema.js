const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true }, // e.g., Alphabets, Numbers, Basic Signs
    videoURL: { type: String, required: false }, // Hosted on Cloudinary/AWS S3
    difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Link to Instructor
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lesson', LessonSchema);
