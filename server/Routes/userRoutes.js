const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
  getUsers,
  sendToWatchlist,
} = require("../Controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const checkUser = require("../middleware/validateTokenHandler");
const router = express.Router();

router.get("*", checkUser);

router.post("/register", registerUser);

router.post("/login", loginUser);


router.get("/users", getUsers);

router.get("/profile", validateToken, currentUser);

router.post("/watchlist/:id", sendToWatchlist);

module.exports = router;
