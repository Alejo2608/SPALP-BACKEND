const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const datesSchema = new Schema({
   nombre: {
      type: String,
      required: true
   },
   apellido: {
      type: String,
      required: true
   },
   imagen: {
      type: Object,
      public_id: String,
      secure_url: String,
      default: null
   },
   correo: {
      type: String,
      required: true
   },
   numero: {
      type: String,
      required: true
   }
});

const Dates = mongoose.model('Dates', datesSchema);
module.exports = Dates