const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const moviesSchema = new Schema({
   titulo: {
      type: String,
      required: true
   },
   genero: {
      type: String,
      required: true
   },
   imagen: {
      type: Object,
      public_id: String,
      secure_url: String,
      default: null
   },
   sinopsis: {
      type: String,
      required: true
   },
   review: {
      type: String,
      required: true
   },
   fechaPubli: {
      type: String,
      required: true
   },
   actores: {
      type: Array,
      default:[],
      required: true
   },
   directores: {
      type: Array,
      default:[],
      required: true
   },
   franquicia: {
      type: String,
      required: true
   },
});

const Movies = mongoose.model('Movies', moviesSchema);
module.exports = Movies