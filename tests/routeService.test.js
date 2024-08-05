const { ParseServer } = require('parse-server');
const path = require('path');

const parseConfig = {
  databaseURI: process.env.DATABASE_URI || 'mongodb://localhost:27017/dev',
  cloud: path.join(__dirname, '../cloud/main.js'),
  appId: process.env.PARSE_APP_ID || 'YOUR_PARSE_APP_ID',
  masterKey: process.env.PARSE_MASTER_KEY || 'YOUR_MASTER_KEY',
  serverURL: process.env.PARSE_SERVER_URL || 'http://localhost:1337/parse',
};

const api = new ParseServer(parseConfig);

module.exports = api;
