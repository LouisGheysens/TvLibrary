const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    }
})

const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;