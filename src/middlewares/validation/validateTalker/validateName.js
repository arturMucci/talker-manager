const { HTTP_BADREQUEST_STATUS } = require('../../../serverStatus/index');

const message = {
  notName: { message: 'O campo "name" é obrigatório' },
  name400: { message: 'O "name" deve ter pelo menos 3 caracteres' },
};

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name) return res.status(HTTP_BADREQUEST_STATUS).json(message.notName);
  if (name.length < 3) return res.status(HTTP_BADREQUEST_STATUS).json(message.name400);
  return next();
}

module.exports = validateName;
