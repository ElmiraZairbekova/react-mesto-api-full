const jwt = require('jsonwebtoken');
const AuthorError = require('../errors/AuthorError');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new AuthorError('Необходима авторизация2222');
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
    // req.user = payload;
  } catch (err) {
    throw new AuthorError('Необходима авторизация6666');
  }

  req.user = payload;
  next();
};
