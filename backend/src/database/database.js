const color = require('chalk');
const mongoose = require('mongoose');
// utilities:
const User = require('./models/User');
// config:
const config = require('../config/config');

mongoose.connect(config.MONGODB_URI, {
  dbName: config.MONGODB_NAME,
  user: config.MONGODB_USER,
  pass: config.MONGODB_PASS,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('connected', () => {
    console.log(color.green('database: connected'));

    // new User({
    //   name: 'przem',
    //   email: 'przem@example.com',
    // })
    //   .save();

    // User.findOne({ name: 'przem' })
    //   .then((document) => {
    //     console.log(user);
    //   });
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
