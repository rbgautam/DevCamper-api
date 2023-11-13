const mongoose = require('mongoose');

const connectDB = async ()=>{
    const conn  =await mongoose.connect(process.env.MONGO_DB_URI,{
        
    });
    console.log(`Connected to mondb : ${conn.connection.host}`)
};

module.exports = connectDB;