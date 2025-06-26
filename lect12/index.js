const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.json()); // axios sends the json data
app.use(express.urlencoded({ extended: true })); // post request by default 
app.use(express.static(path.join(__dirname, 'public'))); // public folder ko bhejega

let todos = [];


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});