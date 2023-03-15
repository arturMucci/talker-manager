const { HTTP_BADREQUEST_STATUS } = require('../serverStatus/index');

const message = {
  blankEmail: { message: 'O campo "email" é obrigatório' },
  invalidEmailFormat: { message: 'O "email" deve ter o formato "email@email.com"' },
};

function validateEmail(req, res, next) {
  const { email } = req.body;
  if (!email) {
    return res.status(HTTP_BADREQUEST_STATUS).json(message.blankEmail);
  }
  const emailRegex = (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i);
  if (!email.match(emailRegex)) {
    return res.status(HTTP_BADREQUEST_STATUS).json(message.invalidEmailFormat);
  }
  return next();
}

module.exports = validateEmail;
