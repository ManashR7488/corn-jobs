import express from "express";
import axios from "axios";
import { api } from "./const.js";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  console.log("This APP");
});

async function get() {
  try {
        const responce = await axios.get("/")
        console.log(responce)   
    } catch (error) {
        console.log("error in this APP","ERROR Is:",error)
    }
}

async function cornJob() {
  api.forEach(async link =>{
    try {
        const responce = await axios.get(link)
        console.log(responce)   
    } catch (error) {
        console.log("error in this link:",link ,"\n","ERROR Is:",error)
    }
  })
}



app.listen(port, () => {
  console.log(`connected to port: ${port}`);
  setInterval(() => {
    get();
  }, 2000);
  setInterval(() => {
    cornJob();
  }, 4000);
});
