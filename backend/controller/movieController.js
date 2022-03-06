const Movie = require('../models/Movie');

//GET
const getAllMovies = async (req, res) => {
    try{
        const movies = await Movie.find({});
        res.json(movies);
    }catch(error) {
        console.error(error);
        res.status(500).json({message: "Server error!"});
    }
}

//Get:Id
const getMovieById = async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id);
        res.json(movie);
    }catch(error) {
        console.error(error);
        res.status(500).json({message: "Server error!"});
    }
}

//POST
const AddMovie = async (req, res) => {
    try{
        const product = await Movie.insertMany(req.params.body);
        res.json(product);
    }catch(error) {
        console.error(error);
        res.status(500).json({message: "Server error!"});
    }
}

//PUT
const UpdateMovie = async (req, res) => {
    try{
        const updatedProduct = await Movie.findByIdAndUpdate(req.params.body);
        res.json(updatedProduct);
    }catch(error) {
        console.error(error);
        res.status(500).json({message: "Server error!"});
    }
}

//DELETE
const DeleteMovie = async (req, res) => {
    try{
        const deletedProduct = await Movie.findByIdAndRemove(req.params.body);
        res.json(deletedProduct);
    }catch(error) {
        console.error(error);
        res.status(500).json({message: "Server error!"});
    }
}