const validateEmail = require('./validateLogin/validateEmail');
const validatePassword = require('./validateLogin/validatePassword');
const validateAuth = require('./validateTalker/validateAuth');
const validateName = require('./validateTalker/validateName');
const validateAge = require('./validateTalker/validateAge');
const validateTalk = require('./validateTalker/validateTalk');
const validateWatchedAt = require('./validateTalker/validateWatchedAt');
const validateRate = require('./validateTalker/validateRate');

module.exports = {
  validateEmail,
  validatePassword,
  validateAuth,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
};