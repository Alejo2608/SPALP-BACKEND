const express = require('express');
const { register, login } = require('../Controllers/authController');
const { isAutheticated, verifyAdmin } = require('../middlewares/isAuthenticated');

const router = express.Router()

// Registrar Usuario
router.post('/register', register)

// Iniciar Sesion
router.post('/login', login)

module.exports = router