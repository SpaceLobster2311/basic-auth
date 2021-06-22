'use strict';

require('dotenv').config();
//heroku will use this automatically
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const { Sequelize, DataTypes} = require('sequelize');

const userModel = require('./userSchema.js');

let sequelize = new Sequelize(DATABASE_URL);

const user = userModel(sequelize, DataTypes);

module.exports = {
  user: user,
};

