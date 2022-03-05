require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');
connectDB();
const app = express();
app.use(express.json());
app.use('/api/movies', movieRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))