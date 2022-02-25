//declare function require(name:string);
import express from "express";
import mongoose from "mongoose";
//import "dotenv/config";
import Flights from "./dbFlights/dbFlights";
import Cors from "cors";
//const express = require("express");
const app = express();
const port = 8001;

const connection_url =
  "mongodb+srv://aimanyounis:aimanyounises123@cluster0.5i7cm.mongodb.net/travelers-db?retryWrites=true&w=majority";

//routes for data

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(`${connection_url}`);

// API Endpoints

app.get("/get-all-users", (req: any, res: any) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
  ];

  res.status(200).send(users);
});

app.get("/travelers/flights", (req: any, res: any) => {
  Flights.find((err: any, data: any) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/", (req: any, res: any) => {
  res.status(200).send("Hello world!");
});
app.post("/travelers/flights", (req: any, res: any) => {
  const dbFlight = req.body;
  Flights.create(dbFlight, (err: any, data: any) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
