const fs = require('fs').promises;
const { getAllTalkers, getTalkerByid } = require('../utils');
const {
  HTTP_NOTFOUND_STATUS,
  HTTP_OK_STATUS,
  HTTP_POSTOK_STATUS,
} = require('../serverStatus');

const allTalkers = async (_req, res) => {
  const data = await getAllTalkers();
  return res.status(HTTP_OK_STATUS).json(data);
};

const addNewTalker = async (req, res) => {
  const data = await getAllTalkers();
  const newTalker = { ...req.body, id: data[data.length - 1].id + 1 };
  const newData = JSON.stringify([...data, newTalker], null, 2);
  await fs.writeFile('src/talker.json', newData);
  res.status(HTTP_POSTOK_STATUS).json(newTalker);
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
  addNewTalker,
};