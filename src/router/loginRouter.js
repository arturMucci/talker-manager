const { Router } = require('express');

const router = Router();

const {
  validateEmail,
  validatePassword,
} = require('../middlewares/validation/index');

const {
  login,
} = require('../controller/loginController');

router.post(
  '/',
  validateEmail,
  validatePassword,
  login,
);

module.exports = router;
