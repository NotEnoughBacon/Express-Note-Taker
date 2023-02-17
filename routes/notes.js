const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helper/fsUtils')
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

notes.use(bodyParser.json());

notes.get('/', (req, res) => {

   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

notes.post('/', (req, res) => {
    
    const {text, title} = req.body
    
    if (title && text) {
        
        const newNote = {
            title: title,
            text: text,
            id: uuidv4()
        };

        readAndAppend(newNote, './db/db.json')
        
        res.json('Note added successfully')
    } else {
        res.error('Error in adding Note')
    }
})


// notes.delete

module.exports = notes;