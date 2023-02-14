const express = require('express');
const readNotes = require('./read-notes');
const writeNotes = require('./write-notes');
const deleteNotes = require('./delete-notes');

const app = express();

app.get('/readnotes', readNotes.getNotes);
app.post('/writenotes', writeNotes.createNote);
app.delete('/deletenotes', deleteNotes.deleteNote);

module.exports = app;


//use app.get and move everything to one folder. notes.get etc.