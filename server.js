const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./api/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api/users', User);

mongoose.connect(
  "mongodb://127.0.0.1/users",
  { useNewUrlParser: true }
).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
          app.listen(4000, ()=>{
              console.log('Server running on http://192.168.67.1:4000');
          })
  },
  err => { /** handle initial connection error */ 
          err & console.log(err) & console.log('Error connecting to db');
  }
);