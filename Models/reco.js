const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const recoSchema = new Schema({
   nombre: {
      type: String,
      required: true
   },
   imagen: {
      type: Object,
      public_id: String,
      secure_url: String,
      default: null
   },
   reco: {
      type: String,
      required: true
   }
});

const Reco = mongoose.model('Reco', recoSchema);
module.exports = Reco