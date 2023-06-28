const Reco = require('../Models/reco')
require('dotenv').config()

function addReco() {
   Reco.insertMany([
      {
         nombre: 'Maria',
         imagen: {
                  public_id: 'PotionsImage/1687940541625-mari',
                  secure_url:
                     'https://res.cloudinary.com/dtne2vbok/image/upload/v1687940530/PotionsImage/1687940541625-mari.jpg'
               },
         reco: 'Me ha encantado el spa, me han atendido muy bien, siempre me gustara, pienso volver pronto',
      },
      {
        nombre: 'Patricia',
        imagen: {
                 public_id: 'PotionsImage/1687940716831-patri',
                 secure_url:
                    'https://res.cloudinary.com/dtne2vbok/image/upload/v1687940707/PotionsImage/1687940716831-patri.jpg'
              },
        reco: 'Es el mejor spa al que he ido, demasiado lujoso, nos vemos pronto de nuevo',
     },
     {
        nombre: 'Abi',
        imagen: {
                 public_id: 'PotionsImage/1687940850524-niggg',
                 secure_url:
                    'https://res.cloudinary.com/dtne2vbok/image/upload/v1687940840/PotionsImage/1687940850524-niggg.jpg'
              },
        reco: 'Lo recomiendo mucho, en especial si necesitas liberar el estres',
     },
     {
        nombre: 'Ale',
        imagen: {
                public_id: 'PotionsImage/1687941199045-peri',
                secure_url:
                'https://res.cloudinary.com/dtne2vbok/image/upload/v1687941192/PotionsImage/1687941199045-peri.jpg'
            },
        reco: 'Es el mejor spa al que he ido, los trabajadores muy amables, gracias por todo',
     }
   ])
}

module.exports = addReco
