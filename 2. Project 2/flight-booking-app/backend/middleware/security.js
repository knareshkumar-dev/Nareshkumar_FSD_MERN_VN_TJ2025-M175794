const rateLimit = require('express-rate-limit');
const validator = require('validator');
const xss = require('xss');

// Enhanced rate limiting
const createRateLimit = (windowMs, max, message) => rateLimit({
  windowMs,
  max,
  message: { error: message },
  standardHeaders: true,
  legacyHeaders: false,
});

// API rate limits
const apiLimiter = createRateLimit(15 * 60 * 1000, 100, 'Too many requests');
const authLimiter = createRateLimit(15 * 60 * 1000, 5, 'Too many login attempts');
const bookingLimiter = createRateLimit(60 * 1000, 3, 'Too many booking attempts');

// Input validation middleware
const validateInput = (req, res, next) => {
  // Sanitize all string inputs
  for (let key in req.body) {
    if (typeof req.body[key] === 'string') {
      req.body[key] = xss(req.body[key]);
      req.body[key] = validator.escape(req.body[key]);
    }
  }
  next();
};

// Email validation
const validateEmail = (email) => {
  return validator.isEmail(email) && validator.isLength(email, { max: 254 });
};

// Password strength validation
const validatePassword = (password) => {
  return validator.isLength(password, { min: 8, max: 128 }) &&
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password);
};

// Security headers middleware
const securityHeaders = (req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
};

module.exports = {
  apiLimiter,
  authLimiter,
  bookingLimiter,
  validateInput,
  validateEmail,
  validatePassword,
  securityHeaders
};