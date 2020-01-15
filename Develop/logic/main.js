const express = require("express");
const path = require("path");
const reserveClass = require("./reservationClass")
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// fs.readFile()
const jsonData;
fs.readFileSync('./logic/reservations.json', function read(err, data) {
  if (err) {
      throw err;
  }
  combinedArr = JSON.parse(data);
  if(combinedArr === undefined){
    return (combinedArr = [])
  } else {
    return combinedArr;
  }
});
const currentReservations = combinedArr.currentReservations;
const waitingList = combinedArr.waitingList;

//Routes

app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

//API JSON tables
app.get("/api/reserve", function (req, res) {
  return res.json(currentReservations)
});

//Posts
app.post("/api/reserve", function(req, res) {
  fs.readFileSync('./logic/reservations.json', function read(err, data) {
    if (err) {
        throw err;
    }
    combinedArr = JSON.parse(data);
    if(combinedArr === undefined){
      return (combinedArr = [])
    } else {
      return combinedArr;
    }
  });
  const currentReservations = combinedArr.currentReservations;
  const waitingList = combinedArr.waitingList;
  let newReservation = req.body;
  console.log(newReservation);
  let table = new Reservation(customerName, customerEmail, customerId, phoneNumber);
  if(currentReservations.length < 5){
    currentReservations.push(table);
  } else {
    waitingList.push(table);
  };
  let resObj = {
    top5: currentReservations,
    waiting: waitingList
  };
  fs.writeFile("./reservations.json", JSON.stringify(resObj));
  return res.status(204).send();
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });