const express = require('express');
const logger = require('./utils/logger');
const errorRoute = require('./utils/errorRoute');
const recipeRouter = require('./routes/recipeRouter');

const app = express();

app.use(express.json());
app.use(logger);

app.use('/api/v1/recipes',recipeRouter);

app.use(errorRoute);
module.exports = app;