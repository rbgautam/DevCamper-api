const express = require('express');
const dotenv = require('dotenv');
const req = require('express/lib/request');
const logger = require('./middleware/logger')
const morgan = require('morgan');
const dbConn = require('./config/db');
//env vars
dotenv.config({path:'./config/config.env'});

//Connect to db

const connect = dbConn();

//Route files
const bootcamps = require('./routes/bootcamps');

var PORT = process.env.PORT || 5000;

var app = express();
if(process.env.NODE_ENV === 'developement'){
    app.use(logger);
    app.use(morgan('dev'));
}
    

//Mount routes
app.use('/api/v1/bootcamps',bootcamps);

jsonData = [
    {id:1,text:'Bootcamp 1'},
    {id:2,text:'Bootcamp 2'},
    {id:3,text:'Bootcamp 3'}
    ];


const server = app.listen(PORT,()=>{
    console.log(`Server started in environment = ${process.env.NODE_ENV} on port ${PORT}`);
});


process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`);
    server.close(()=> process.exit(1));

});