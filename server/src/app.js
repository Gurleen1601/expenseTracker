const express = require('express');
//importing the database into the server
const dbConnect = require('./config/dbConnect');

//connecting the db
dbConnect();

const app = express();

module.exports=app;