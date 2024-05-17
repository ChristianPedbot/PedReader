const express = require('express');
const router = express.Router();
const locationsController = require('../controllers/locations');
const methodOverride = require('method-override');
const authMiddleware = require('../authentication/auth');
router.use(methodOverride('_method'));

router.post('/locations/add', locationsController.addLocation);

router.get('/locations/:id/returnDate' , locationsController.getReturnDate);

module.exports = router;