const fs = require('fs').promises;

async function readFiles(path) {
  const data = await fs.readFile(path, 'utf-8');
  return JSON.parse(data);
}

async function getAllTalkers() {
  const response = readFiles('src/talker.json');
  return response;
}

async function getTalkerByid(id) {
  const allTalkers = await getAllTalkers();
  const singleTalker = allTalkers.find((talker) => talker.id === id);
  return singleTalker;
}

module.exports = {
  readFiles,
  getAllTalkers,
  getTalkerByid,
};