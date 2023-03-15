const { HTTP_BADREQUEST_STATUS } = require('../../../serverStatus/index');

const message = {
  notTalk: { message: 'O campo "talk" é obrigatório' },
  notRate: { message: 'O campo "rate" é obrigatório' },
};

function validateTalk(req, res, next) {
  const { talk } = req.body;
  if (!talk) return res.status(HTTP_BADREQUEST_STATUS).json(message.notTalk);
  return next();
}

module.exports = validateTalk;