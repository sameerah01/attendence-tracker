const express = require('express');
const Users = require('./controller.js');
const router = express.Router();

router.get('/users', Users.getData);
router.get('/addAttendance', Users.getAttendance);
router.post('/users', Users.addUser);
router.post('/addAttendance', Users.addAttendance);

module.exports = router;