const cors = require('cors')
const express = require("express");
//const mongoose = require("mongoose");
const connectDb = require("./Config/dbConnection");
require("dotenv").config();
//const path = require('path')
const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.header(
    "Access-Control-Allow-Headers",'Authorization',
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow various HTTP methods
  next();
});
connectDb();


//const PORT = process.env.PORT || 4000;

app.use("/api/anime", require("./Routes/animeRoutes"));
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