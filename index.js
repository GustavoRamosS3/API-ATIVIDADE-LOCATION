require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const parseConfig = require('./data/parseConfig');
const routeRoutes = require('./routes/routeRoutes');

const app = express();
app.use(bodyParser.json());

// Middleware para Parse Server
app.use('/parse', parseConfig);

// Rotas da API
app.use('/api', routeRoutes);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
