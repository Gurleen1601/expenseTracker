// require express for setting up the express server
const express = require('express');

//importing the database into the server
const dbConnect = require('./config/dbConnect');
const errorHandler = require("./middlewares/errorMiddleware");
const userRoute= require('./routes/users/usersRoutes');
// using express
const app = express();

// const logger=(req,res,next) => {
//     console.log('am a logger');
//     next();
// };
// app.use(logger);

//connecting the db
dbConnect();

//middlewares
app.use(express.json());

//middleware to use routes folder
app.use('/api/users',userRoute);

//error
app.use(errorHandler);

module.exports=app;