const getAllTalkers = require('./getAllTalkers');

async function getTalkerByid(id) {
  const allTalkers = await getAllTalkers();
  const singleTalker = allTalkers.find((talker) => talker.id === id);
  return singleTalker;
}

module.exports = getTalkerByid;