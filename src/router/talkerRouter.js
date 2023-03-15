const { Router } = require('express');
const {
  allTalkers,
  talkerById,
  addNewTalker,
} = require('../controller/talkerController');
const {
  validateAuth,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
} = require('../middlewares/validation/index');

const router = Router();

router.get('/', allTalkers);

router.post(
  '/',
  validateAuth,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  addNewTalker,
  );

router.get('/:id', talkerById);

module.exports = router;
