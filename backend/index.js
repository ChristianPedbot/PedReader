const express = require('express');
const session = require('express-session');
const fileupload = require('express-fileupload');
const cors = require('cors');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env


const app = express();
app.use(session({secret: '123'}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use(express.static(__dirname));

const bookRouter = require('./routes/books');

app.use(express.urlencoded({ extended: true }));

app.use('/', bookRouter);

app.get('/booksadd' ,(req, res) =>{
    res.redirect('/index.html')
})

app.listen(3000, () => {
    console.log("Ouvindo na porta 3000");
});
