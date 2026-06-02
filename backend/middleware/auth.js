/**
 * Authentication Middleware
 *
 * TODO: Implement JWT verification
 * ─────────────────────────────────
 * 1. Extract the token from the Authorization header (Bearer <token>).
 * 2. Verify it using jwt.verify(token, process.env.JWT_SECRET).
 * 3. Attach the decoded user payload to req.user.
 * 4. Call next() on success, or return 401 on failure.
 *
 * Example:
 *   const jwt = require('jsonwebtoken');
 *   const decoded = jwt.verify(token, process.env.JWT_SECRET);
 *   req.user = decoded;
 */

const protect = (req, res, next) => {
  // Placeholder: passes all requests through without authentication.
  // Replace this body with JWT verification logic when ready.
  next();
};

module.exports = { protect };
