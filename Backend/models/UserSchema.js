const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String, default: '' }, // New field for profile image
    role: { type: String, enum: ['learner', 'instructor', 'admin'], default: 'learner' },
    progress: [{
        lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
        completed: { type: Boolean, default: false },
        score: { type: Number, default: 0 }
    }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);