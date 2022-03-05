require('dotenv').config();
const moviesData = require('./data/movies');
const connectDB = require('./config/db');
const Movie = require('./models/Movie');

connectDB();

const importData = async () => {
    try{
        await Movie.deleteMany({});
        await Movie.insertMany(moviesData);
        console.log("Data import succeeded!");
        process.exit();
    }catch(error){
        console.error("Data import failed!");
    }
}

importData();