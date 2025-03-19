const User = require('../models/UserSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { hashPassword, comparePassword, generateToken } = require('../utils/authUtils');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "Email already in use" });
        }
        
        // If not, proceed with registration
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        console.log(user);
        return res.status(201).json({ message: 'User registered successfully' });
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
      }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return res.json({ token, user });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

