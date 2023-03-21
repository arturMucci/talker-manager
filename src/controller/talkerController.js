const fs = require('fs').promises;
const { getAllTalkers, getTalkerByid } = require('../utils');
const {
  HTTP_OK_STATUS,
  HTTP_POSTOK_STATUS,
  HTTP_DELETEOK_STATUS,
  HTTP_NOTFOUND_STATUS,
} = require('../serverStatus');

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

const addNewTalker = async (req, res) => {
  const data = await getAllTalkers();
  const newTalker = { ...req.body, id: data[data.length - 1].id + 1 };
  const newData = JSON.stringify([...data, newTalker], null, 2);
  await fs.writeFile('src/talker.json', newData);
  res.status(HTTP_POSTOK_STATUS).json(newTalker);
};

const editTalkerById = async (req, res) => {
  const { id } = req.params;
  const data = await getAllTalkers();
  const newTalker = { ...req.body, id: Number(id) };
  if (data.every((talker) => talker.id !== Number(id))) {
    return res.status(HTTP_NOTFOUND_STATUS).json({ message: 'Pessoa palestrante não encontrada' });
  }
  const newArray = data.map((talker) => {
    if (talker.id === Number(id)) return newTalker;
    return talker;
  });
  const newData = JSON.stringify([id, ...newArray], null, 2);
  await fs.writeFile('src/talker.json', newData);
  return res.status(HTTP_OK_STATUS).json(newTalker);
};

const deleteTalkerById = async (req, res) => {
  const { id } = req.params;
  const data = await getAllTalkers();
  const newArray = data.filter((talker) => talker.id !== Number(id));
  const newData = JSON.stringify(newArray, null, 2);
  await fs.writeFile('src/talker.json', newData);
  return res.status(HTTP_DELETEOK_STATUS).json();
};

const searchTalkerByName = async (req, res) => {
  const { q } = req.query;
  const data = await getAllTalkers();
  const filteredTalkers = data.filter((talker) => talker.name.includes(q));
  return res.status(HTTP_OK_STATUS).json(filteredTalkers);
};

module.exports = {
  talkerById,
  allTalkers,
  addNewTalker,
  editTalkerById,
  deleteTalkerById,
  searchTalkerByName,
};