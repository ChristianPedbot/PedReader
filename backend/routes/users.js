const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');



router.put('/users/edit/:id', usersController.editUsers);

router.delete('/users/delete/:id', usersController.deleteUsers);

router.get('/users', usersController.users);

router.post('/users/add', usersController.addUsers);

module.exports = router;