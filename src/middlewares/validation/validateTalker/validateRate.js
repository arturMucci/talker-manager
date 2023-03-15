const { HTTP_BADREQUEST_STATUS } = require('../../../serverStatus/index');

const message = {
  notRate: { message: 'O campo "rate" é obrigatório' },
  rateNotValid: { message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' },
};

function validateRate(req, res, next) {
  const { talk: { rate } } = req.body;
  if (rate === undefined) return res.status(HTTP_BADREQUEST_STATUS).json(message.notRate);
  if (rate < 1 || rate > 5 || !Number.isInteger(rate)) {
    return res.status(HTTP_BADREQUEST_STATUS).json(message.rateNotValid);
  }
  return next();
}

module.exports = validateRate;
