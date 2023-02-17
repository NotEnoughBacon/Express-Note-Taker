const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helper/fsUtils')
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

//body parser to parse incoming JSON 
notes.use(bodyParser.json());

//a get that reads the db and parses it
notes.get('/', (req, res) => {

   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

//the post takes in the parsed request, and sets a new note with the title, text, and sets a unique id using uuid. it then appends it to the db
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

module.exports = notes;