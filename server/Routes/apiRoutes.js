const express = require("express");
const axios = require("axios");
const rateLimit = require("express-rate-limit");

// Rate limit
const limiter = rateLimit({
  windowMs: 1000, // 10 minutes
  max: 3, // limit each IP to 100 requests per windowMs
  message:
    "You have exceeded the 60 requests in 10 minutes limit! Please try again later.",
});

const baseUrl = "https://api.jikan.moe/v4";

const router = express.Router();

router.get("free/:id", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/anime/{id}`);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

router.get("episode/:id", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/anime/{id}/episodes`);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

router.get("related/:id", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/anime/{id}/recommendations`);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

//airing
router.get("/airing", limiter, async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?filter=airing`);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

//popular
router.get("/popular", limiter, async (req, res) => {
  try {
    const response = await axios.get(
      `${baseUrl}/top/anime?filter=bypopularity`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/top", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?filter=top`);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

//upcoming
router.get("/upcoming", limiter, async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?filter=upcoming`);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

//completed
router.get("/completed", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?filter=completed`);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

//recomended
router.get("/recomended", limiter, async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/recommendations/anime`);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

//genre
router.get("/gernes", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/genres/anime`);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
