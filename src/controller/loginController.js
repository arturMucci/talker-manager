const { createToken } = require('../utils');
const { HTTP_OK_STATUS } = require('../serverStatus');

const login = (_req, res) => {
  const token = createToken();
  return res.status(HTTP_OK_STATUS).json({ token });
};

module.exports = {
  login,
};