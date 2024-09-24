const express = require("express");
const axios = require("axios");
const redis = require("redis");

const client = redis.createClient({
  url: "redis://localhost:6379",
});

//top/anime?filter=upcoming

//client.connect.catch();

const baseUrl = "https://api.jikan.moe/v4";

const router = express.Router();

//airing anime route
router.get("/airing", async (req, res) => {
  try {
    const response = await axios.get(
      `${baseUrl}/top/anime?filter=airing&limit=10`
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//popular
router.get("/popular", async (req, res) => {
  try {
    const response = await axios.get(
      `${baseUrl}/top/anime?filter=bypopularity&limit=10`
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//upcoming
router.get("/upcoming", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?filter=upcoming`);
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
    const response = await axios.get(`${baseUrl}/recomendations/anime`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//genress
router.get("/genres", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/genres/anime`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//genre
router.get("/genre/:genreName", async (req, res) => {
  try {
    // Get the genre name from the route parameter
    const genreName = req.params.genreName.toLowerCase();

    if (!genreName) {
      return res
        .status(400)
        .json({ error: "Genre name is required in the URL." });
    }

    const response = await axios.get(
      `${baseUrl}/top/anime?filter=bypopularity`
    ); // Adjust URL as needed
    const data = response.data;

    // Check if data exists and contains the expected structure
    if (!data || !data.data) {
      return res.status(404).json({ error: "No data found" });
    }

    // Filter data for the specified genre
    const filteredAnime = data.data.filter((anime) => {
      return anime.genres.some(
        (genres) => genres.name.toLowerCase() === genreName
      );
    });

    // Return filtered data or message if no matches found
    if (filteredAnime.length > 0) {
      res.json(filteredAnime);
    } else {
      res
        .status(404)
        .json({ message: `No anime found for genre: ${genreName}` });
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res
      .status(500)
      .json({ error: "Failed to fetch data from the external API" });
  }
});

module.exports = router;
