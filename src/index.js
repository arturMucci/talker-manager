const express = require('express');
const talkerRouter = require('./router/talkerRouter');
const loginRouter = require('./router/loginRouter');
const { HTTP_OK_STATUS } = require('./serverStatus');

const app = express();
app.use(express.json());

app.use('/talker', talkerRouter);

app.use('/login', loginRouter);

const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => response.status(HTTP_OK_STATUS).send());

app.listen(PORT, () => console.log('Online'));
