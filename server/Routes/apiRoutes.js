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
router.get("/genres", cacheMiddleware, async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/genres/anime`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//get anime and check status equal to Finished Airing
router.get("/complete", cacheMiddleware, async (req, res) => {
  try {
    // Step 1: Fetch data from the external API
    const response = await axios.get(`${baseUrl}/top/anime`);

    // Step 2: Check if response structure is correct
    if (response?.data?.data) {
      const animeData = response.data.data;

      // Step 3: Apply filtering logic for "Finished Airing"
      const finishedAnimes = animeData.filter(
        (anime) => anime.status === "Finished Airing"
      );

      // Step 4: Implement pagination if necessary
      const page = parseInt(req.query.page) || 1; // Default to page 1
      const limit = parseInt(req.query.limit) || 25; // Default to 10 results per page
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      const paginatedResults = finishedAnimes.slice(startIndex, endIndex);
      // Step 5: Return the filtered and paginated results
      return res.status(200).json({
        total: finishedAnimes.length,
        page,
        limit,
        data: paginatedResults,
      });
    } else {
      // Handle unexpected response structure from external API
      return res
        .status(500)
        .json({ error: "Unexpected response structure from external API" });
    }
  } catch (error) {
    // Step 6: Error handling in case the external API fails
    console.error("Error fetching data from external API:", error.message);

    // Send a proper error response
    return res
      .status(500)
      .json({ error: "Failed to fetch data from external API" });
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

router.get("/anime", async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/anime`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//get data from anime router and filter by type
//get anime by first letter
router.get("/anime/:letter", cacheMiddleware, async (req, res) => {
  const { letter } = req.params;
  const { page = 1, limit = 25 } = req.query;
  try {
    const response = await axios.get(`${baseUrl}/anime?letter=${letter}`, {
      params: {
        page,
        limit,
      },
    });
    const { data, pagination } = response.data;
    res.status(200).json({
      pagination: {
        current_page: pagination.current_page,
        last_visible_page: pagination.last_visible_page,
        has_next_page: pagination.has_next_page,
        items: {
          count: pagination.items.count,
          total: pagination.items.total,
          per_page: pagination.items.per_page,
        },
      },
      data, // The actual list of popular anime
    });
  } catch (error) {
    console.log(error);
  }
});

const fetchAllPages = async (url, collectedData = [], page = 1) => {
  try {
    const response = await axios.get(url, { params: { page } });

    if (response?.data?.data) {
      const currentData = response.data.data;
      const allData = [...collectedData, ...currentData];
      // Check if the API indicates there's another page
      const hasNextPage = response.data.meta?.nextPage; // Adjust to your API's pagination logic

      if (hasNextPage) {
        return await fetchAllPages(url, allData, page + 1);
      } else {
        return allData;
      }
    } else {
      throw new Error("Unexpected response structure");
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

router.get("/finished", cacheMiddleware, async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/anime`, {
      params: { status: "Finished Airing" },
    });

    if (response?.data?.data) {
      const finishedAnimes = response.data.data;
      res.json(finishedAnimes);
    }
    // Step 3: Return the filtered data
    res.json(finishedAnimes);
  } catch (error) {
    console.error("Error processing request:", error.message);
    return res.status(500).json({ error: "Failed to process request" });
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
