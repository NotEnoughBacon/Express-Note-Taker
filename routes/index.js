const express = require('express');
const notes = require('./notes');

const app = express();

app.use('/notes', notes);

module.exports = app;


//use app.get and move everything to one folder. notes.get etc.