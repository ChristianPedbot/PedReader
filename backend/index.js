const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const methodOverride = require('method-override');

require('dotenv').config();

const app = express();

app.use(session({
  secret: '123',
  resave: false,
  saveUninitialized: false
}));

app.use(methodOverride('_method'));
app.use(express.json());
app.use(cors(
  {
    allowedHeaders: ['*'],
    credentials: true,
  }
));
app.use(express.static('public'));
app.use(express.static(__dirname));

const bookRouter = require('./routes/books');
const authorRouter = require('./routes/author');
const userRouter = require('./routes/users');
const locationsRouter = require('./routes/locations');

app.use(express.urlencoded({ extended: true }));
app.use('/', bookRouter);
app.use('/', authorRouter);
app.use('/', userRouter);
app.use('/', locationsRouter);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Page not found' });
});

const sequelize = require('./utils/configSequelizer');
const User = require('./utils/sequalize');

(async () => {
  try {
    await sequelize.sync();

    const adminUser = await User.findOne({ where: { isAdmin: true } });

    if (!adminUser) {
      await User.create({
        name: 'Admin',
        email: 'admin@example.com',
        isAdmin: true,
        password: 'admin',
        telephone: '123456789',
        address: 'Admin Address',
        city: 'Marilia',
        state: 'SP',
        img: 'https://images.unsplash.com/photo-1588534331122-77ac46322dd2?q=80&w=1879&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      });
      console.log('Administrator user created successfully! Your password is: admin (please change it as soon as possible)');
    } else {
      console.log('An administrator user already exists in the database.');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
})();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on the port ${PORT}`);
});
