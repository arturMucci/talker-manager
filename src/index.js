const express = require('express');
const fs = require('fs').promises;

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

async function readFile() {
  const data = await fs.readFile('src/talker.json', 'utf-8');
  const retorno = JSON.parse(data);
  return retorno;
}

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => response.status(HTTP_OK_STATUS).send());

app.get('/talker', async (_request, response) => {
  const data = await readFile();
  return response.status(HTTP_OK_STATUS).json(data);
});

app.listen(PORT, () => console.log('Online'));
