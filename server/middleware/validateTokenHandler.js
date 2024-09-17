const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

 const validateToken = asyncHandler(async (req, res, next) => {
   let token;
   let authHeader = req.headers.Authorization || req.headers.authorization;
   if (authHeader && authHeader.startsWith("Bearer")) {
     token = authHeader.split(" ")[1];
     jwt.verify(token, process.env.SECRET, (err, decoded) => {
       if (err) {
         res.status(401);
         throw new Error("User is not authorized");
       }
       req.user = decoded.user;
       next();
     })
     if (!token) {
       res.status(401);
       throw new Error("User is not authorized or token is missing");
     }
   }
 
 });

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports =   {checkUser, validateToken}; ;
