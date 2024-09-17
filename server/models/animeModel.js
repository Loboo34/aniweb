const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const animeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  episodes: {
    type: String,
    required: true,
  },
 
  image: {
    type: String,
    required: true,
  },
  trailer: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  release_date: {
    type: String,
    required: true,
  },
  end_date: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
  },
  studio: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("anime", animeSchema);
