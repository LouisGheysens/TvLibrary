require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

connectDB();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use('/api/movies', movieRoutes);
app.use('/api/users', userRoutes);

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node js  API project for mongodb',
            version: '1.0.0',
            description: 'Movie api'
        },
        servers: [
            {
                api: 'http://localhost:5000/'
            }
        ]
    },
    apis: ['./routes/movieRoutes.js']
}

const swaggerDocs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))