const express = require('express');
const { upload } = require('../Controllers/uploadController');
const { createDates, allDates, allReco } = require('../Controllers/datesControllers')

const router = express.Router()


//Obtener Pociones
router.get('/potions', allDates)
// Crea una Pocion
router.post('/create-potions', upload.single('imagen'), createDates)
// Obtener Reco
router.get('/reco', allReco)

module.exports = router