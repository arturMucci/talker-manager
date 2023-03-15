const readFiles = require('./readFiles');

async function getAllTalkers() {
  const response = readFiles('src/talker.json');
  return response;
}

module.exports = getAllTalkers;
