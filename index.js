import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { api } from "./const.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const delay = process.env.DELAY || 420000;

const localUrl =
  process.env.NODE_ENV === "production"
    ? "https://corn-jobs.onrender.com"
    : `http://localhost:${port}`;

let homeIntervalStarted = false;

async function keepAlive() {
  try {
    await axios.get(`${localUrl}/home`);
    if (process.env.NODE_ENV !== "production") {
      console.log("Self ping successful");
    }
  } catch (error) {
    console.error("Error in self ping:", error.message);
  }
}

async function pingExternalAPIs() {
  for (const link of api) {
    try {
      if (process.env.NODE_ENV !== "production") {
        console.log("Calling:", link);
      }
      await axios.get(link);
    } catch (error) {
      console.error(`Error fetching ${link}:`, error.message);
    }
  }
}

function startExternalPingLoop() {
  setInterval(pingExternalAPIs, delay);
}

function startSelfPingLoop() {
  setInterval(keepAlive, 2000);
}

app.get("/", (req, res) => {
  res.send("HOME");
});

app.get("/home", (req, res) => {
  res.send("Home Connected..");
});

app.get("/start", (req, res) => {
  if (!homeIntervalStarted) {
    startSelfPingLoop();
    homeIntervalStarted = true;
    res.send("Started self-ping loop.");
  } else {
    res.send("Self-ping loop already running.");
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  startExternalPingLoop();
});
