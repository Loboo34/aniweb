const cors = require("cors");
const express = require("express");
//const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const connectDb = require("./Config/dbConnection");
require("dotenv").config();
//const path = require('path')

const app = express();
app.use(cors());
app.use(express.json());

const perSecondLimiter = rateLimit({
  windowMs: 1000, // 1 second window
  max: 3, // Limit each IP to 3 requests per second
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// 60 requests per minute
const perMinuteLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute window
  max: 60, // Limit each IP to 60 requests per minute
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(perSecondLimiter);
app.use(perMinuteLimiter);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization",
    "Origin, X-Requested-With, Content-Type, Accept" // Allow these headers
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow various HTTP methods
  next();
});
connectDb();

//const PORT = process.env.PORT || 4000;

app.use("/api/anime", require("./Routes/apiRoutes"));
app.use("/api/user", require("./Routes/userRoutes"));

//db
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {

//   })
//   .catch((err) => {
//     console.log(err);
//   });
app.listen(process.env.PORT, () => {
  console.log(" Node server running");
});
