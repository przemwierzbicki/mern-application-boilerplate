const app = require('./src/app');
// config:
const config = require('./src/config/config');

require('./src/database/database');

app.listen(config.PORT, () => {
  console.log(`up&running on ${PORT}`);
});
