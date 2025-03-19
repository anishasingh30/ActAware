const express = require('express');
const { getAllLessons, createLesson, getLessonById } = require('../controllers/lessonController');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = require('../utils/fileUploadUtils');

const router = express.Router();

router.get('/getall', getAllLessons);
router.post('/', authMiddleware, createLesson);
router.get('/:id', getLessonById);
router.post('/upload', authMiddleware, upload.single('file'), (req, res) => {
    res.json({ filePath: `/uploads/${req.file.filename}` });
});

module.exports = router;
