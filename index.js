const error = require('./middleware/error');
const asyncMiddleware = require('./middleware/async');
const express = require('express');
const app = express();


app.get('/', asyncMiddleware((req, res) => {
  return Promise.reject(new Error('boom!'));
}));

app.use(error);


const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));
