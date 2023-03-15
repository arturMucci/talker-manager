const { Router } = require('express');
const { createToken } = require('../utils');
const { HTTP_OK_STATUS } = require('../serverStatus');
const { validateEmail, validatePassword } = require('../middlewares/validation/index');

const router = Router();

router.post('/', validateEmail, validatePassword, (_req, res) => {
  const token = createToken();
  res.status(HTTP_OK_STATUS).json({ token });
});

module.exports = router;
