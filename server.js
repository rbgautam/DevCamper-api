const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path:'./config/config.env'});

var PORT = process.env.PORT || 5000;

var app = express();

app.listen(PORT,()=>{
    console.log(`Server started in environment = ${process.env.NODE_ENV} on port ${PORT}`);
});