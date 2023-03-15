const { HTTP_BADREQUEST_STATUS } = require('../../../serverStatus');

const message = {
  blankPassword: { message: 'O campo "password" é obrigatório' },
  invalidPasswordFormat: { message: 'O "password" deve ter pelo menos 6 caracteres' },
};

function validatePassword(req, res, next) {
  const { password } = req.body;
  if (!password) {
    return res.status(HTTP_BADREQUEST_STATUS).json(message.blankPassword);
  }
  if (password.length < 6) {
    return res.status(HTTP_BADREQUEST_STATUS).json(message.invalidPasswordFormat);
  }
  return next();
}

module.exports = validatePassword;
