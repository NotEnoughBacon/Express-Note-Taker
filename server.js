const express = require('express');
const path = require('path');
const api = require('./routes/index');

const PORT = 3001 //process.env.PORT;

const app = express();

app.use('/api', api);

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