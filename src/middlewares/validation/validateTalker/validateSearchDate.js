const { HTTP_BADREQUEST_STATUS } = require('../../../serverStatus/index');

const message = {
  watchedAtNaD: { message: 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"' },
};

function validateSearchDate(req, res, next) {
  const { date } = req.query;
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (date && !date.match(dateRegex)) {
    return res.status(HTTP_BADREQUEST_STATUS).json(message.watchedAtNaD);
  }
  return next();
}

module.exports = validateSearchDate;
