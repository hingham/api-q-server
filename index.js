'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

const q = require('./src/lib/q/publisher.js');

global.Q = new q();

function setPings(){
  global.Q.updatePings();
  global.Q.resetCounter();
  console.log('the Q', global.Q);
}

setInterval(setPings, 600000);

require('./src/app.js').start(process.env.PORT);
