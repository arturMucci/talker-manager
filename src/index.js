const express = require('express');
const { getAllTalkers, getTalkerByid } = require('./utils/returnTalkers');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const HTTP_NOTFOUND_STATUS = 404;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => response.status(HTTP_OK_STATUS).send());

app.get('/talker', async (_req, res) => {
  const data = await getAllTalkers();
  return res.status(HTTP_OK_STATUS).json(data);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getTalkerByid(Number(id));
  if (!data) {
    return res.status(HTTP_NOTFOUND_STATUS).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(HTTP_OK_STATUS).json(data);
});

app.listen(PORT, () => console.log('Online'));
