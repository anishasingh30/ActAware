const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
    console.log(token)
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select('-password'); // Exclude password
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
