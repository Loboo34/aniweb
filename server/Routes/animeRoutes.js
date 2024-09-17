const express = require('express');
const router = express.Router();
const {addAnime, getALLAnime, getAnime, deleteAnime, updateAnime, getAnimeByGenre, getAnimeGenre, getTrendingAnime, getPopularAnime, getCompletedAnime, getOngoingAnime, getAnimeByName } = require('../Controllers/animeController')

router.route('/').get(getALLAnime)

router.route('/complete').get(getCompletedAnime)

router.route('/ongoing').get(getOngoingAnime)

router.route('/').post(addAnime)



router.route('/:id').delete(deleteAnime)

router.route('/:id').patch(updateAnime)

router.route("/genre/:genreName").get(getAnimeByGenre);

router.route('/popular').get(getPopularAnime)

//router.route('/search').get(searchAnime)

//router.route('/search/:id').get(searchAnimeById)

router.route('/genres').get(getAnimeGenre)

router.route('/trending').get(getTrendingAnime)

router.route("/:id").get(getAnime);

//search by name
router.route('/search/:name').get(getAnimeByName)









module.exports = router;