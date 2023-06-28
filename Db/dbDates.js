const Dates = require('../Models/dates')
require('dotenv').config()

function addDates() {
   Dates.insertMany([
      {
         nombre: 'Maria',
         apellido: "Perez",
         correo: 'mariacoer@gmail.com',
         numero: '04127772834',
      }
   ])
}

module.exports = addDates
