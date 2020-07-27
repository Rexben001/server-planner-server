const express = require('express');
const routes = require('./routes');
const app = express();

app.get('/', (req, res) => res.status(200).send('Api is live!!!'));
app.use(express.json());
app.use('/api/v1', routes);

module.exports = app;
