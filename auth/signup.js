'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Users = require('../models/userSchema.js');



router.post('/signup', async (req, res, next) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).send(record);
    next();
  } catch (e) { res.status(403).send('Error Creating User'); }
});

module.exports = router;
