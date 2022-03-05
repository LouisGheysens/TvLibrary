const express = require('express');
const router = express.router();
const apiRoute = require('./apiRoutes');

//@desc GET ALL MOVIES
//@route GET api/movies
//@access Public
router.get(apiRoute.Get, (req, res) => {

})

//@desc GET MOVIE
//@route GET api/movies/id
//@access Public
router.get(apiRoute.Id, (req, res) => {
    
})

//@desc Post MOVIE
//@route POST api/movies/save
//@access Public
router.post(apiRoute.Save, (req, res) => {
    
})

//@desc PUT MOVIE
//@route PUT api/movies/id
//@access Public
router.put(apiRoute.Put, (req, res) => {
    
})

//@desc DELETE MOVIE
//@route DELETE api/movies/id
//@access Public
router.put(apiRoute.Delete, (req, res) => {
    
})

module.exports = router;