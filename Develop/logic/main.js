const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const currentReservations = [];
const tableList = [];
tableList.length = 5;
const waitingList = [];


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });