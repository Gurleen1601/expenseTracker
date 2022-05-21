// require express for setting up the express server
const express = require('express');
//importing the database into the server
const dbConnect = require('./config/dbConnect');

//connecting the db
dbConnect();

// using express
const app = express();

module.exports=app;