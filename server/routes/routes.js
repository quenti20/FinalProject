const express = require("express");
const router = express.Router();
const userController = require('../controllers/User');

router.get('/', userController.dummy)
router.post('/newUser', userController.createNewUser)
router.post('/login', userController.userLogin)
router.put('/changePassword/:id', userController.changePassword)

module.exports = router;