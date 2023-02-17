const express = require('express');
const notes = require('./notes');

const app = express();

//my route folder (that i really didnt need) for the notes
app.use('/notes', notes);

module.exports = app;


