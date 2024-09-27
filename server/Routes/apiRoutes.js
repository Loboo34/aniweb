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

//get anime
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/anime`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

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

// router.get("/genre", async (req, res) => {
//   try {
//     // Extract the genre ID and name from the query parameters
//     const genreId = req.query.id;
//     const genreName = req.query.name ? req.query.name.toLowerCase() : null;

//     // Validate that both id and name are provided
//     if (!genreId || !genreName) {
//       return res
//         .status(400)
//         .json({
//           error: "Both genre ID and name are required as query parameters.",
//         });
//     }

//     const response = await axios.get(`${baseUrl}/anime`); // Adjust the URL as needed
//     const data = response.data;

//     // Check if data exists and contains the expected structure
//     if (!data || !data.data) {
//       return res.status(404).json({ error: "No data found" });
//     }

//     // Filter data to include anime that contains the specified genre
//     const filteredAnime = data.data.filter((anime) => {
//       // Check if the genres array includes an object where `mal_id` and `name` match the query parameters
//       return anime.genres.some(
//         (genre) =>
//           genre.mal_id.toString() === genreId &&
//           genre.name.toLowerCase() === genreName
//       );
//     });

//     // Return filtered data or a message if no matches are found
//     if (filteredAnime.length > 0) {
//       res.json(filteredAnime);
//     } else {
//       res
//         .status(404)
//         .json({
//           message: `No anime found for genre: ${genreName} with ID: ${genreId}`,
//         });
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     res
//       .status(500)
//       .json({ error: "Failed to fetch data from the external API" });
//   }
// });

//get all anime
router.get("/anime", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/anime`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/genre", async (req, res) => {
  try {
    // Extract the genre name from the query parameters
    const genreName = req.query.name ? req.query.name.toLowerCase() : null;

    // Check if the genre name is provided
    if (!genreName) {
      return res
        .status(400)
        .json({ error: "Genre name is required as a query parameter." });
    }

    // Fetch anime data from the external API
    const response = await axios.get(`${baseUrl}/anime`); // Adjust the URL as needed
    const data = response.data;

    // Check if data exists and contains the expected structure
    if (!data || !data.data) {
      return res.status(404).json({ error: "No data found" });
    }

    // Filter the data to include anime that matches the specified genre name
    const filteredAnime = data.data.filter((anime) => {
      // Check if the genres array includes an object where `name` matches `genreName`
      return anime.genres.some(
        (genre) => genre.name.toLowerCase() === genreName
      );
    });

    // Return the filtered data or a message if no matches are found
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

//recommendations
router.get("/recommendations", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/anime/{id}/recommendations`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
