const express = require('express');
const { upload } = require('../Controllers/uploadController');
const { createMovies, allMovies, deleteMovie, updateMovie } = require('../Controllers/moviesControllers')

const router = express.Router()


//Obtener Pociones
router.get('/movies', allMovies)
// Crea una Pocion
router.post('/create-movies', upload.single('imagen'), createMovies)
// Actualizar una Pocion
router.post('/update-movies/:movieID', upload.single('imagen'), updateMovie)
// Eliminar una Pocion
router.post('/delete-movie/:movieD', deleteMovie)

module.exports = router