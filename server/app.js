const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./routes/Routes.js');
app.use('/', routes);

app.listen(3000, () => {
  console.log('listening at port:3000');
});
