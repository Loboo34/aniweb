const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./Config/dbConnection");
require("dotenv").config();
//const path = require('path')
connectDb()
const app = express();
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