const express = require("express");
const axios = require("axios");
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 300 }); // 5 minutes

const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;

  const cachedData = cache.get(key);
  if (cachedData) {
    return res.json(cachedData);
  }

  res.sendResponse = res.json;
  res.json = (body) => {
    cache.set(key, body);
    res.sendResponse(body);
  };

  next();
};

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
router.get("/airing", cacheMiddleware, async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?filter=airing`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//popular
router.get("/popular", cacheMiddleware, async (req, res) => {
  try {
    const response = await axios.get(
      `${baseUrl}/top/anime?filter=bypopularity`
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//upcoming
router.get("/upcoming", cacheMiddleware, async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?filter=upcoming`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//favorite
router.get("/favorite", cacheMiddleware, async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?filter=favorite`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//movies
router.get("/movies", cacheMiddleware, async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?type=movie`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//tv
router.get("/tv", cacheMiddleware, async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?type=tv`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//ova
router.get("/ova", cacheMiddleware, async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?type=ova`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//special
router.get("/special", cacheMiddleware, async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/top/anime?type=special`);
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

//get anime by genre
router.get("/genre/:name", cacheMiddleware, async (req, res) => {
  
  
});
//get all anime

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

router.get("/anime", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/anime`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//get anime by first letter
router.get("/anime/:letter", cacheMiddleware, async (req, res) => {
  const { letter } = req.params;
  try {
    const response = await axios.get(`${baseUrl}/anime?letter=${letter}`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

// router.get("all", async (req, res) => {
//   try {
//     const [airing, popular, upcoming, genres] = await Promise.all([
//       axios.get(`${baseUrl}/top/anime?filter=airing`),
//       axios.get(`${baseUrl}/top/anime?filter=bypopularity`),
//       axios.get(`${baseUrl}/top/anime?filter=upcoming`),
//       axios.get(`${baseUrl}/genres/anime`),
//     ]);

//     res.json({
//       airing: airing.data,
//       popular: popular.data,
//       upcoming: upcoming.data,
//       genres: genres.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }

// });

module.exports = router;
