const express = require('express');
const path = require('path');
const api = require('./routes/index');

//allowing heroku to set the port
const PORT = process.env.PORT || 3001;

const app = express();

//using the api routing folder
app.use('/api', api);

//serving static pages for the web service
app.use(express.static('public'));

//route for homepage
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

//route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () => 
    console.log(`Listening at http://localhost:${PORT}`)
)