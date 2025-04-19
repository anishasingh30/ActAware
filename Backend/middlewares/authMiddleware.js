const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');

const authMiddleware = async (req, res, next) => {
    let token = req.header('Authorization');

    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access denied. No token provided or bad format.' });
    }

    try {
        token = token.split(' ')[1]; // safely extract token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });

        req.user = user;
        next();
    } catch (error) {
        console.error('JWT Error:', error.message);
        res.status(401).json({ message: 'Invalid token', error: error.message });
    }
};

module.exports = authMiddleware;
