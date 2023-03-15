const { HTTP_UNAUTHENTICATED_STATUS } = require('../../../serverStatus/index');

const messages = {
  token404: { message: 'Token não encontrado' },
  token400: { message: 'Token inválido' },
};

function validateAuth(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) return res.status(HTTP_UNAUTHENTICATED_STATUS).json(messages.token404);
  if (authorization.length !== 16) {
    return res.status(HTTP_UNAUTHENTICATED_STATUS).json(messages.token400);
  }
  return next();
}

module.exports = validateAuth;
