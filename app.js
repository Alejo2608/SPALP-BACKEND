const express = require('express')
const routerMovies = require("./Routes/routerMovies");
const routerAuth = require("./Routes/routerAuth");
const morgan = require('morgan')
const cors=require('cors')
require('dotenv').config();
// MongoDB Connection
require('./Db/db');


// Cors
const corsOptions = {
   credentials: true,
   origin: process.env.PATHCORS || '*',
   methods: ['GET', 'POST']
};
// Settings
const app = express();
// Middlewares
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors())
// Routes
app.use("/movie", routerMovies);
app.use("/", routerAuth);

module.exports = app;