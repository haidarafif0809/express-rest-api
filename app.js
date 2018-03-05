const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const users = require('./routes/users');
const index = require('./routes/index');

//body parser
app.use(bodyParser.urlencoded({
  extended: false
}))

//routes
app.use('/api', index);
app.use('/', index);

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Server Starts on ${port}`);
});
