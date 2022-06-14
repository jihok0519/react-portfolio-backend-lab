// Import Dependencies
const express = require('express');
const cors = require('cors');

// Import JSON files
const projects = require('./projects.json');
const about = require('./about.json');

// Create our app object
const app = express();

// Set up middleware
app.use(cors());

// Home route for testing our app
app.get('/', (req, res) => {
    res.send("What's up World!");
});

// route for retrieving projects
app.get("/projects", (req, res) => {
    // send projects via JSON
    res.json(projects);
});

// route for retrieving about info
app.get("/about", (req, res) => {
    // send about via JSON
    res.json(about);
})

// declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));