const Potions = require('../Models/movies')
require('dotenv').config()

function addPotions() {
   Potions.insertMany([
      {
         titulo: 'BlacZom',
         genero: 'Accion',
         imagen: {
            public_id: 'PotionImage/perkJugger_udako2',
            secure_url:
               'https://res.cloudinary.com/dtne2vbok/image/upload/v1685842205/PotionsImage/perkJugger_udako2.png'
         },
         sinopsis: "Pelicula de zombies",
         review: 'Me gusto mucho',
         fechaPubli: '12-08-2021',
         actores: ['Brad Pitt', 'Emma Watson'],
         directores: ['ElMan', 'Este'],
         franquicia: 'Sony',
      },
   ])
}

module.exports = addPotions
