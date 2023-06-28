const Dates=require("../Models/dates");
const Reco = require("../Models/reco");
const { deleteImage, uploadImageEvent } = require('../utils/cloudinary');
var fs = require('fs-extra');


//Traer todas las Pociones

const allDates=async(req,res)=>{
    await Dates.find({})
    .then(data => {

      res.json(data)

    });
}

const allReco=async(req,res)=>{
   await Reco.find({})
   .then(data => {

     res.json(data)

   });
}


//Crear Pocion

const createDates = async (req, res) => {
    try {
      console.log(req)
      
       const { nombre, apellido, imagen, correo, numero } = req.body;
       let date = await Dates.findOne({ nombre });
       console.log(date);
       if (date) return res.status(404).json({messageError: 'Ya existe esta pocion'});
 
       date = new Dates({ nombre, apellido, imagen, correo, numero });
       console.log(date);
       if(req.file!==undefined){
         const { path } = req.file;
         if (path) {
            const result = await uploadImageEvent(path)
            await fs.unlink(path)
            date.imagen = {public_id: result.public_id, secure_url: result.secure_url}
         }
      }
       await date.save()
       return res.status(200).json({date: date._id});
    } catch (error) {
       // console.log(error.message);
       return res.status(500).json({messageError: error.message});
    }
 }
 


 module.exports={
    createDates,
    allDates,
    allReco
 }