const { db } = require('../models/Movie');
const Movie = require('../models/Movie');
const bodyParser = require('body-parser');


//GET
const getAllMovies = async (req, res) => {
    try{
        const movies = await Movie.find({});
        res.json(movies);
    }catch(error) {
        console.error(error);
        res.status(500).json({message: "Server getAll() error!"});
    }
}

//Get:Id
const getMovieById = async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id);
        res.json(movie);
    }catch(error) {
        console.error(error);
        res.status(500).json({message: "Server Get(id) error!"});
    }
}

//POST
const AddMovie = async (req, res) => {
    try{
        const movie = new Movie({
            name: req.body.name,
            imageUrl: req.body.imageUrl,
            description: req.body.description,
            price: req.body.price,
            duration: req.body.duration
        })
        movie.save()
        .then(data => {
            res.json(data);
        });
    }catch(error) {
        console.error(error);
        res.status(400).json({message: "Server AddMovie(movie) error!"});
    }
}

//PUT
const UpdateMovie = async (req, res) => {
    try{
        const updatedProduct = await Movie.findByIdAndUpdate(req.params.id);
        res.json(updatedProduct);
    }catch(error) {
        console.error(error);
        res.status(500).json({message: "Server updateMovie(id, movie) error!"});
    }
}

//DELETE
const DeleteMovie = async (req, res) => {
    try{
        const deletedProduct = await Movie.findByIdAndRemove(req.params.id);
        res.json({ message: 'Deleted object'});
    }catch(error) {
        console.error(error);
        res.status(500).json({message: "Server DeleteMovie(id) error!"});
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    AddMovie,
    UpdateMovie,
    DeleteMovie,
}