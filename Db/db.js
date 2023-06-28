require('dotenv').config();
const mongoose = require('mongoose');
const Dates = require('../Models/dates')
const addDates = require('./dbDates');
const addReco = require('./dbReco')

mongoose.set('strictQuery', false)

mongoose.connect(process.env.URI) 
   .then(async()=> {
      const potions = await Dates.find().limit(1).lean();
      if (potions.length === 0) {
         addDates()
         addReco()
         console.log('Citas Agregadas');
      }
      console.log('DB Conectada🚀')
   })
   .catch((e) => console.log("Fallo de Conexion " + e));