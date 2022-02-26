import express from "express";
import mongoose from "mongoose";
import Flights from "./Database/dbFlights";
import Users from "./Database/dbUsers";
import Hotels from "./Database/dbHotels";
import Cors from "cors";
// APP config
const app = express();
const port = 8001;

const connection_url =
  "mongodb+srv://aimanyounis:aimanyounises123@cluster0.5i7cm.mongodb.net/travelers-db?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(`${connection_url}`);

// API Endpoints
// default route
app.get("/", (req: any, res: any) => {
  res.status(200).send("Hello world How are you!");
});

// flights
app.get("/travelers/flights", (req: any, res: any) => {
  Flights.find((err: any, data: any) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
// Flights collection
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
// Users collection
app.post("/travelers/users/", (req: any, res: any) => {
  const dbUsers = req.body;
  Users.create(dbUsers, (err: any, data: any) => {
    try {
      res.status(201).send(data);
    } catch (error) {
      res.status(500).send(err);
    }
  });
});

app.get("/travelers/users/", (req: any, res: any) => {
  Users.find({}, (err: any, data: any) => {
    try {
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send(err);
    }
  });
});

app.post("/travelers/hotels/", (req: any, res: any) => {
  const dbHotels = req.body;
  Hotels.create(dbHotels, (err: any, data: any) => {
    try {
      res.status(201).send(data);
    } catch (error) {
      res.status(500).send(err);
    }
  });
});

app.get("travelers/hotels/", (req: any, res: any) => {
  try {
    Hotels.find({}, (err: any, data: any) => {
      try {
        res.status(200).send(data);
      } catch (error) {
        res.status(500).send(err);
      }
    });
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
