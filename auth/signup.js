'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes} = require('sequelize');
const {user} = require('../models/index.js');



router.post('/signup', async (req, res) => {

  // user.beforeCreate( async (user) => {
  //   user.password = bcrypt.hash(user.password, 10);
  // });
  console.log(user);
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await user.create(req.body);
    res.status(200).json(record);
    
  } catch (e) { res.status(403).send('Error Creating User'); }
});

module.exports = router;

