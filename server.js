// Dependencies
const express = require('express');
const path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
var Table1 = {
    ID: "JamilW",
    Name: "Jamil Weeks",
    Email: "jamilweeks@yahoo.com",         
    Phone: "999-999-9999"
} 

var Table2 = {
    ID: "CharlesB",
    Name: "Charles Brady",
    Email: "charlesbrady@gmail.com",
    Phone: "888-888-8888"
}

var Table3 =    {
    ID: "JulieR",
    Name: "Julie Ragsdale",
    Email: "julieragsdale@hotmail.com",
    Phone: "777-777-77777"

}

// Routes
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

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


