const express = require('express');
const router = express.Router();
const { getAllMovies, getMovieById, AddMovie, UpdateMovie, DeleteMovie, } = require('../controller/movieController')


//@desc GET ALL MOVIES
//@route GET api/movies
//@access Public
router.get('/', getAllMovies);

//@desc GET MOVIE
//@route GET api/movies/id
//@access Public
router.get('/:id', getMovieById);

//@desc Post MOVIE
//@route POST api/movies/save
//@access Public
router.post('/save', AddMovie);

//@desc PUT MOVIE
//@route PUT api/movies/update/id
//@access Public
router.put('/:id', UpdateMovie);

//@desc DELETE MOVIE
//@route DELETE api/movies/id
//@access Public
router.delete('/:id', DeleteMovie);

module.exports = router;