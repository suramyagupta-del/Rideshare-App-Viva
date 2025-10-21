const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/usersController');

router.route('/')
    .patch(usersController.updateUser);
    

module.exports = router;