const { getAllTalkers, getTalkerByid } = require('../utils');
const { HTTP_NOTFOUND_STATUS, HTTP_OK_STATUS } = require('../serverStatus');

const allTalkers = async (_req, res) => {
  const data = await getAllTalkers();
  return res.status(HTTP_OK_STATUS).json(data);
};

const talkerById = async (req, res) => {
  const { id } = req.params;
  const data = await getTalkerByid(Number(id));
  if (!data) {
    return res.status(HTTP_NOTFOUND_STATUS).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(HTTP_OK_STATUS).json(data);
};

module.exports = {
  talkerById,
  allTalkers,
};