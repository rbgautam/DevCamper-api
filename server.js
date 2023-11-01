const express = require('express');
const dotenv = require('dotenv');
const req = require('express/lib/request');

//Route files
const bootcamps = require('./routes/bootcamps');

//env vars
dotenv.config({path:'./config/config.env'});

var PORT = process.env.PORT || 5000;

var app = express();

//Mount routes

app.use('/api/v1/bootcamps',bootcamps);

jsonData = [
    {id:1,text:'Bootcamp 1'},
    {id:2,text:'Bootcamp 2'},
    {id:3,text:'Bootcamp 3'}
    ];


app.listen(PORT,()=>{
    console.log(`Server started in environment = ${process.env.NODE_ENV} on port ${PORT}`);
});