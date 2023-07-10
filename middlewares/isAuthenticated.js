const Users = require('../Models/Users')
const jwt = require('jsonwebtoken');

const isAutheticated = async (req, res, next) => {
   try {
      const header = req.headers['authorization']
      const accessToken = header ? header.split(' ')[1] : null
      if (!accessToken) return res.status(401).json({messageError: 'Not token provided'})
   
      const decoded = jwt.verify(accessToken, process.env.SECRETTK)
      
      let user = await verifyUser(decoded)
      req.user = user
      
      return next()
   } catch (error) {
      return res.status(401).json({messageError: error.message});
   }
}

const verifyUser = async (decodedToken) => {
   console.log(decodedToken.id)
   let user = await Users.findById(decodedToken.id, {rol: 1}).lean();
   if (!user) throw new Error('User not found');
   if (user.rol === 'User' || user.rol === 'Admin') {
      user._id = user._id.toString();
      return user
   }
   throw new Error('Not role assigned')
}

const checkedUser = async (req, res, next) => {
   try {
      console.log(req.user);
      const {userID} = req.params
      let user = await Users.findById(userID).lean();
      if (!user) return res.status(404).json({messageError: 'User to update not found'});
      user._id = user._id.toString();
      console.log(user)
      if (user._id === req.user._id) {
         return next()
      }
      throw new Error('You are not authorized to modify another user')
   } catch (error) {
      return res.status(401).json({messageError: error.message})
   }
}

module.exports = {
   isAutheticated,
   checkedUser
}