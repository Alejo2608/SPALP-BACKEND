require('dotenv').config();
const mongoose = require('mongoose');
const Movies = require('../Models/movies')
const addMovies = require('./dbMovies'); // Agrega las Pociones

mongoose.set('strictQuery', false)

mongoose.connect(process.env.URI) 
   .then(async()=> {
      const movies = await Movies.find().limit(1).lean();
      if (movies.length === 0) {
         addMovies()
         console.log('Pociones Agregados');
      }
      console.log('DB Conectada🚀')
   })
   .catch((e) => console.log("Fallo de Conexion " + e));