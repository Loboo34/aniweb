const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//@desc register user
//@route Post /api/users/register
//access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields must be filled");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  //hash pass
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`'user created'$(user)`);
  if (user) {
    res.status(200).json({ _id: user.id, email: user.email });
  }
  res.status(404);
  throw new Error("User data not valid");

  //res.json({ message: "Registered" });
});

//@desc login user
//@route Post /api/users/login
//access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404);
    throw new Error("All fields are required");
  }
  const user = await User.findOne({ email });
  //compare pass with hashed password
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.SECRET,
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is incorrect");
  }

  res.json({ message: "Loged in" });
});

//get all users
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  if (!users) {
    res.status(404);
    throw new Error("No users found");
  }
  res.status(200).json(users);
});

//get current user info
//@desc current user
//@route Post /api/users/current
//access private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
  res.json({ message: "Current user info" });
});



//send anime to watchlist by id
const sendToWatchlist = asyncHandler(async (req, res) => {
  const animeId = req.params.id;
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  if (user.watchlist.includes(animeId)) {
    res.status(404);
    throw new Error("Anime already in watchlist");
  }
  user.watchlist.push(animeId);
  await user.save();
  res.status(200).json({ message: "Anime added to watchlist" });
});

//get user profile
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.status(200).json(user);
});


module.exports = { registerUser, loginUser, currentUser, getUsers, sendToWatchlist };
