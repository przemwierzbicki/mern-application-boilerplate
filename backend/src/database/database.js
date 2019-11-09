const color = require('chalk');
const mongoose = require('mongoose');
// config:
const config = require('../config/config');

mongoose.connect(config.MONGODB_URI, {
  dbName: config.MONGODB_NAME,
  user: config.MONGODB_USER,
  pass: config.MONGODB_PASS,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('connected', () => {
    console.log(color.green('database: connected'));
  })
  .on('disconnected', () => {
    console.log(color.green('database: disconnected'));
  })
  .on('error', (err) => {
    console.error(color.red(err));
  })
  .on('reconnected', () => {
    console.log(color.green('database: reconnected'));
  });
