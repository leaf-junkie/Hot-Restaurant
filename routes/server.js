// Dependencies
const express = require('express');
const path = require('path');
const tables = require('./tables.js');

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Display current reservations
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

// Make a new reservation (takes in JSON input)
app.post("/api/reservations", function(req, res) {
    const newReservation = req.body;
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);
    reservations.push(newReservation);
    res.json(newReservation);
});

// Server listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });