const { HTTP_BADREQUEST_STATUS } = require('../../../serverStatus/index');

const message = {
  notAge: { message: 'O campo "age" é obrigatório' },
  age400: { message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' },
};

function validateAge(req, res, next) {
  const { age } = req.body;
  if (!age) return res.status(HTTP_BADREQUEST_STATUS).json(message.notAge);
  if (age < 18 || typeof age !== 'number' || !Number.isInteger(age)) {
    return res.status(HTTP_BADREQUEST_STATUS).json(message.age400);
  }
  return next();
}

module.exports = validateAge;
