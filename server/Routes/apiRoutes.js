const express = require("express");
const axios = require("axios");
const redis = require("redis");

const client = redis.createClient( {
  url: 'redis://localhost:6379'
});

//top/anime?filter=upcoming

//client.connect.catch();

const baseUrl = "https://api.jikan.moe/v4";

const router = express.Router();

//airing anime route
router.get("/airing", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?filter=airing&limit=10`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//popular
router.get("/popular", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?filter=bypopularity&limit=10`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//upcoming
router.get("/upcoming", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?filter=upcoming&limit=10`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//completed

//recomended
router.get("/recomended", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/recomendations/anime&limit=10`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//genre

module.exports = router;
