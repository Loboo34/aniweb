const Anime = require("../models/animeModel");
const mongoose = require("mongoose");

//get all
const getALLAnime = async (req, res) => {
  const anime = await Anime.find({}).sort({ name: 1 });

  res.status(200).json(anime);
};

//get by id
const getAnime = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invaliddddd" });
  }
  const anime = await Anime.findById(id);

  if (!anime) {
    return res.status(404).json({ error: "not found" });
  }

  res.status(200).json(anime);
};

const addAnime = async (req, res) => {
  const {
    name,
    episodes,
    image,
    trailer,
    rating,
    genre,
    status,
    release_date,
    end_date,
    season,
    studio,
    duration,
    source,
    synopsis,
  } = req.body;

  try {
    const anime = await Anime.create({
      name,
      episodes,
      image,
      trailer,
      rating,
      genre,
      status,
      release_date,
      end_date,
      season,
      studio,
      duration,
      source,
      synopsis,
    });
    res.status(200).json(anime);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete
const deleteAnime = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid" });
  }
  const anime = await Anime.findOneAndDelete({ _id: id });

  if (!anime) {
    return res, status(404).json({ error: "not found" });
  }
  res.status(200).json(anime);
};

//update
const updateAnime = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such " });
  }

  const anime = await Anime.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!anime) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json({ anime, message: "Updated" });
};

//get popular anime
const getPopularAnime = async (req, res) => {
  const anime = await Anime.find({}).sort({ rating: -1 });

  res.status(200).json(anime);
};

//get anime by genre
const getAnimeByGenre = async (req, res) => {
  const { genreName } = req.params;
  const anime = await Anime.find({ genre: genreName });

  if (!anime) {
    return res.status(404).json({ message: "can not find said genre" });
  }

  res.status(200).json(anime);
};

//get all genres
const getAnimeGenre = async (req, res) => {
  const anime = await Anime.find({}).sort({ genre: 1 });

  res.status(200).json(anime);
};

//get trending anime
const getTrendingAnime = async (req, res) => {
  const anime = await Anime.find({}).sort({ release_date: -1 });

  res.status(200).json(anime);
};

//get copleted anime
const getCompletedAnime = async (req, res) => {
  const anime = await Anime.find({ status: "complete" });

  res.status(200).json(anime);
};

//get ongoing anime
const getOngoingAnime = async (req, res) => {
  const anime = await Anime.find({ status: "ongoing" });

  res.status(200).json(anime);
};

const getAnimeByName = async (req, res) => {
  const { name } = req.params;
  const anime = await Anime.find({ name: name });

  if (!anime) {
    return res.status(404).json({ error: "can not find said anime" });
  }

  res.status(200).json(anime);
};

module.exports = {
  addAnime,
  getALLAnime,
  getAnime,
  deleteAnime,
  updateAnime,
  getPopularAnime,
  getAnimeByGenre,
  getAnimeGenre,
  getTrendingAnime,
  getCompletedAnime,
  getOngoingAnime,
  getAnimeByName,
};
