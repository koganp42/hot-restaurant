const express = require("express");
const path = require("path");
const reserveClass = require("./reservationClass")
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const currentReservations = [];
const waitingList = [];

//Routes

app.get("/home", function (req, res) {
  res.send("Server works!");
});

app.get("/reserve", function (req, res) {
  res.send("Server works!");
});

app.get("/tables", function (req, res) {
  res.send("Server works!");
});

//Posts
app.post("/reserve", function(req, res) {
  let newReservation = req.body;
  console.log("newReservation");
  let table = new Reservation(customerName, customerEmail, customerId, phoneNumber);
  if(currentReservations.length < 5){
    currentReservations.push(table);
  } else {
    waitingList.push(table);
  }
  fs.appendFile("./reservations.json", JSON.stringify());
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });