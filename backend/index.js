const express = require('express');
const session = require('express-session');
const fileupload = require('express-fileupload');
const cors = require('cors');

const app = express();
app.use(session({secret: '123'}));
app.use(express.json());
app.use(cors());

const bookRouter = require('./routes/books');

app.use(express.urlencoded({ extended: true }));

app.use('/', bookRouter);

app.listen(3000, () => {
    console.log("Ouvindo na porta 3000");
});
