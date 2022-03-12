const express = require('express');
const router = express.Router();

//@desc GET ALL MOVIES
//@route GET api/movies
//@access Public
router.get('/', (req, res) => {

})

//@desc GET MOVIE
//@route GET api/movies/id
//@access Public
router.get('/:id', (req, res) => {
    
})

//@desc Post MOVIE
//@route POST api/movies/save
//@access Public
router.post('/api/movies', (req, res) => {
    
})

//@desc PUT MOVIE
//@route PUT api/movies/id
//@access Public
router.patch('/:id', (req, res) => {
    
})

//@desc DELETE MOVIE
//@route DELETE api/movies/id
//@access Public
router.delete('/:id', (req, res) => {
    
})

module.exports = router;