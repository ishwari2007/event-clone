const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();


// middleware
app.use(cors());
app.use(express.json());


// connect database
connectDB();


// routes
app.use("/api/events", require("./routes/eventRoutes"));


// test route
app.get("/", (req, res) => {
  res.send("Event Management API Running");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});