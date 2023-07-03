const express = require('express');
const port = 5000;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./routes'));
app.listen(port, () => {
  console.log('connected in port', port);
});
