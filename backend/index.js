const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();

app.use(session({
  secret: '123',
  resave: false,
  saveUninitialized: false
}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use(express.static(__dirname));

const bookRouter = require('./routes/books');
app.use(express.urlencoded({ extended: true }));
app.use('/', bookRouter);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});
