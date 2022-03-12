const Movie = require('../models/Movie');

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
        let product = new Movie(req.body);
        product.save()
        .then(x => {
            x.send("Item saved to database!");
        })
        res.json(product);
    }catch(error) {
        console.error(error);
        res.status(500).json({message: "Server AddMovie(movie) error!"});
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