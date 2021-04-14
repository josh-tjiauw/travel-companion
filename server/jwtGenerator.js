const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator(userId) {
  const payload = {
    user: {
      id: userId,
      username: username,
      firstName: firstName,
      lastName: lastName
    }
  };
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1h' });
}

module.exports = jwtGenerator;
