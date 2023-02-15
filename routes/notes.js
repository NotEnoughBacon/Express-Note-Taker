const notes = require('express').Router();
const { json } = require('express');
const { readFile, writeFile } = require('fs');
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req, res) => {

    readFile('./db/db.json', 'utf-8', (err,data) => {
        if (err) {
            console.log(err)
        }

        const jsonData = JSON.parse(data);

        res.json(jsonData)
    })
});

notes.post('/', (req, res) => {
    
    const {title, text} = req.body

    if (req.body) {

        const newNote = {
            title,
            text,
            noteId: uuidv4()
        };

        writeFile(newNote, './db/db.json')
        res.json('Note added successfully')
    } else {
        res.error('Error in adding Note')
    }
})


// notes.delete

module.exports = notes;