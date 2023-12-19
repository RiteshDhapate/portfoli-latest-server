require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dataModel = require("./data.model.js");

const app = express();

//database configuration
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("database connection established");
  } catch (error) {
    console.log("Database connection error", error);
  }
};
dbConnection();

// middlewares
app.use(express.json());
app.use(cors());

//requests and responses
app.get("/", (req, res) => {
  res.send("server response sended successfully");
});

app.get("/api/data", async (req, res) => {
  try {
    const data = await dataModel.find();
    res.json(data[0]);
    console.log("data sent successfully");
  } catch (error) {
    res.status(500).json({ massage: "internal server error" });
    console.log(error);
  }
});

// server listening
const port = process.env.PORT || 2001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
