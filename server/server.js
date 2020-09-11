const express = require("express");
const socket = require("socket.io");
const bodyParser = require("body-parser");
const cors = require("cors");
const glob = require("glob");
const path = require("path");
require('dotenv').config();



// define app
const app = express();
// register api


// register routes
app.use( express.static( __dirname + '/public/apps' ) );

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/', (req, res) => {
    // This will be the index page
    res.send('index page');
});

const server = app.listen(process.env.PORT, () => {
    console.log("Fizgig started on port 8080");
});

const io = socket(server);