const express = require('express');
const router = express.Router();
const apiRoute = require('./apiRoutes');

//@desc GET ALL MOVIES
//@route GET api/movies
//@access Public
router.get(apiRoute.Get, async (req, res) => {

})

//@desc GET MOVIE
//@route GET api/movies/id
//@access Public
router.get(apiRoute.Id, async (req, res) => {
    
})

//@desc Post MOVIE
//@route POST api/movies/save
//@access Public
router.post(apiRoute.Save, async (req, res) => {
    
})

//@desc PUT MOVIE
//@route PUT api/movies/id
//@access Public
router.patch(apiRoute.Put, async (req, res) => {
    
})

//@desc DELETE MOVIE
//@route DELETE api/movies/id
//@access Public
router.delete(apiRoute.Delete, async (req, res) => {
    
})

module.exports = router;