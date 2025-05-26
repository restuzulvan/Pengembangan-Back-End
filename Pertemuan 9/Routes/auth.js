
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { register, login, logout } = require('../Controllers/authController');
const { protect, adminOnly } = require('../Middlewares/authMiddleware');

router.post('/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  register
);

router.post('/login',
  body('email').isEmail(),
  body('password').notEmpty(),
  login
);

router.post('/logout', logout);

router.get('/admin', protect, adminOnly, (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

module.exports = router;