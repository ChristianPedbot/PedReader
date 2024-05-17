const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.put('/users/edit/:id', usersController.editUsers);

router.delete('/users/delete/:id', usersController.deleteUsers);

router.get('/users', usersController.users);

router.post('/users/add', usersController.addUsers);

router.post('/users/login', usersController.loginUser);

router.get('/users/get/:id', usersController.getUsersById);

router.get('/users/:id/books', usersController.getBookByUserId);

module.exports = router;