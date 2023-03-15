const { HTTP_BADREQUEST_STATUS } = require('../../../serverStatus/index');

const message = {
  notWatchedAt: { message: 'O campo "watchedAt" é obrigatório' },
  watchedAtNaD: { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
};

function validateWatchedAt(req, res, next) {
  const { talk: { watchedAt } } = req.body;
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!watchedAt) return res.status(HTTP_BADREQUEST_STATUS).json(message.notWatchedAt);
  if (!watchedAt.match(dateRegex)) {
    return res.status(HTTP_BADREQUEST_STATUS).json(message.watchedAtNaD);
  }
  return next();
}

module.exports = validateWatchedAt;