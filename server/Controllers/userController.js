const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc register user
//@route Post /api/users/register
//access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields must be filled");
  }
  const userExists = await User.findOne(email);
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
  res.status(400);
  throw new Error("User data not valid");

  //res.json({ message: "Registered" });
});

//@desc login user
//@route Post /api/users/login
//access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Loged in" });
});

//@desc current user
//@route Post /api/users/current
//access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user info" });
});

module.exports = { registerUser, loginUser, currentUser };
