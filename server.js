const express  = require('express');
const serverConfig =require('./configs/server.config');
const mongoose=require('mongoose');
const dbConfig= require('./configs/db.config');


const app = express();
/**
 * logic to connect to mongoDB and create an Admin user
 * need to have a mongoDB up and running in local machine
 */
mongoose.connect(dbConfig.DB_URL);
const db=mongoose.connection;

db.on("error",()=>{
    console.log("Error while connecting to DB");
});

db.once("open",()=>{
    console.log("DB is connected");
});



app.listen(serverConfig.PORT, ()=>{
    console.log(`server started on the port number ${serverConfig.PORT}` );
})




