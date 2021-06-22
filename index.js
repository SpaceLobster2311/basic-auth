'use strict';
// entry point into file

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const server = require('./server.js');
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const sequelize = new Sequelize(DATABASE_URL);

sequelize.sync().then(() => {
  server.start(PORT);
});
