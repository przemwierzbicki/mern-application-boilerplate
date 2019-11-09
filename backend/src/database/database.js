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
