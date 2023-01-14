const express = require('express');
const { createUser } = require('../models/userModel');
const { loginUserCtrl, getAllUsersData } = require('../controller/userCtrl');
const router = express.Router();

router.post('/register', function (req, res) {
    createUser;
});

router.post('/login', function (req, res) {
    loginUserCtrl;
});

router.get('/userinfo', function (req, res) {
    getAllUsersData;
})

module.exports = router;