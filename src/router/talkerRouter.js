const { Router } = require('express');

const {
  allTalkers,
  talkerById,
  addNewTalker,
  editTalkerById,
  deleteTalkerById,
  searchTalkerByQuery,
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

router.get(
  '/',
  allTalkers,
);

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

router.get('/search',
  validateAuth,
  validateRate,
  searchTalkerByQuery);

router.put(
  '/:id',
  validateAuth,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  editTalkerById,
);

router.delete(
  '/:id',
  validateAuth,
  deleteTalkerById,
);

router.get(
  '/:id',
  talkerById,
);

module.exports = router;
