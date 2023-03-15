const { Router } = require('express');
const { allTalkers, talkerById } = require('../controller/talkerController');

const router = Router();

router.get('/', allTalkers);

router.get('/:id', talkerById);

module.exports = router;
